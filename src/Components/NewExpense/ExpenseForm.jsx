import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpenseData }) => {
  const [enteredTitle, setTitle] = useState('');
  const [enteredAmount, setAmount] = useState('');
  const [enteredDate, setDate] = useState('');

  const resetForm = () => {
    setTitle('');
    setAmount('');
    setDate('');
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const title = enteredTitle.trim();
    const amount = parseFloat(enteredAmount);
    const date = new Date(enteredDate);

    // Inline validation
    if (!title || isNaN(amount) || amount <= 0 || isNaN(date.getTime())) {
      console.warn('Invalid form input:', { title, amount, date });
      alert('Please enter a valid title, positive amount, and valid date.');
      return;
    }

    onSaveExpenseData({ title, amount, date });
    resetForm();
  };

  return (

    <form className="new-expense" onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control__title">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title..."
            required
          />
        </div>
        <div className="new-expense__control__amount">
          <label>Amount</label>
          <input
            type="number"
            step="0.01"
            value={enteredAmount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            required
            min="0.01"
          />
        </div>
        <div className="new-expense__control__date">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={(e) => setDate(e.target.value)}
            min="2021-01-01"
            max="2025-12-31"
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
