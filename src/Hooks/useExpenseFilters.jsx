import { useState, useMemo } from 'react';

export const useExpenseFilters = (expenses) => {
  const [filter, setFilter] = useState({ year: 'All', month: 'All' });

  const filteredExpenses = useMemo(() => {
    return expenses.filter(exp => {
      const yearMatch = filter.year === 'All' || exp.date.getFullYear().toString() === filter.year;
      const monthMatch = filter.month === 'All' || exp.date.getMonth().toString() === filter.month;
      return yearMatch && monthMatch;
    });
  }, [expenses, filter]);

  const totalExpenses = useMemo(() => {
    return filteredExpenses.reduce((acc, expense) => acc + expense.amount, 0);
  }, [filteredExpenses]);

  return { filter, setFilter, filteredExpenses, totalExpenses };
};
