import { useState, useEffect } from 'react';

const STORAGE_KEY = 'expenses';

// Utility function for validating expenses
const isValidExpense = (exp) => {
  try {
    return (
      typeof exp.id === 'string' &&
      typeof exp.title === 'string' &&
      exp.title.trim() !== '' &&
      typeof exp.amount === 'number' &&
      exp.amount > 0 &&
      !isNaN(new Date(exp.date).getTime()) // Check if date is valid
    );
  } catch {
    return false;
  }
};

// Hook for managing and persisting expenses
export const usePersistentExpenses = () => {
  const [expenses, setExpenses] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return []; // No data in localStorage

      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return []; // If data is not an array, return empty array

      // Rehydrate data: Convert amount to number and date to Date object
      const validExpenses = parsed
        .map(exp => ({
          ...exp,
          amount: Number(exp.amount), // Ensure amount is a number
          date: new Date(exp.date),   // Rehydrate the date field
        }))
        .filter(isValidExpense); // Filter out invalid expenses

      // Sort by date descending
      return validExpenses.sort((a, b) => b.date - a.date);
    } catch (err) {
      console.error('usePersistentExpenses: Failed to parse localStorage', err);
      return []; // If there's an error parsing, return an empty array
    }
  });

  // Persist the expenses data in localStorage whenever it changes
  useEffect(() => {
    try {
      const toSave = expenses.map(exp => ({
        ...exp,
        date: exp.date.toISOString(), // Serialize date to ISO string for storage
      }));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave)); // Save the updated data
    } catch (err) {
      console.error('usePersistentExpenses: Failed to save expenses', err);
    }
  }, [expenses]);

  // Add new expense
  const addExpense = (expenseData) => {
    const newExpense = {
      id: `e${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, // Improved ID generation
      ...expenseData,
      amount: Number(expenseData.amount),
      date: new Date(expenseData.date), // Rehydrate the date
    };

    // Add the new expense to the top and sort by date
    setExpenses(prevExpenses => [
      newExpense,
      ...prevExpenses,
    ].sort((a, b) => b.date - a.date));
  };

  // Clear all expenses
  const clearAll = () => {
    if (window.confirm('Are you sure you want to delete ALL expenses?')) {
      setExpenses([]);
    }
  };

  return { expenses, addExpense, clearAll };
};

export default usePersistentExpenses;
