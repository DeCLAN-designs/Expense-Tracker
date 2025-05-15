import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({ onAddExpense }) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    // Normalize payload before passing up
    const cleanedData = {
      title: enteredExpenseData.title.trim(),
      amount: Number(enteredExpenseData.amount),
      date: new Date(enteredExpenseData.date),
    };

    if (
      cleanedData.title &&
      !isNaN(cleanedData.amount) &&
      cleanedData.amount > 0 &&
      !isNaN(cleanedData.date.getTime())
    ) {
      onAddExpense(cleanedData); // ID will be generated in hook
    } else {
      console.warn('Invalid expense input:', cleanedData);
    }
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
