import React from 'react';
import './ExpenseDateFilter.css';

const ExpenseDateFilter = ({ selectedMonth, selectedYear, onChange }) => {
  const months = [
    { value: 'All', label: 'All Months' },
    { value: '0', label: 'January' },
    { value: '1', label: 'February' },
    { value: '2', label: 'March' },
    { value: '3', label: 'April' },
    { value: '4', label: 'May' },
    { value: '5', label: 'June' },
    { value: '6', label: 'July' },
    { value: '7', label: 'August' },
    { value: '8', label: 'September' },
    { value: '9', label: 'October' },
    { value: '10', label: 'November' },
    { value: '11', label: 'December' }
  ];

  const years = ['All', '2023', '2024', '2025'];

  return (
    <div className="expense-date-filter">
      <div className="filter-group">
        <label>Year</label>
        <select
          value={selectedYear}
          onChange={(e) => onChange({ year: e.target.value, month: selectedMonth })}
        >
          {years.map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
      </div>
      <div className="filter-group">
        <label>Month</label>
        <select
          value={selectedMonth}
          onChange={(e) => onChange({ year: selectedYear, month: e.target.value })}
        >
          {months.map((m) => (
            <option key={m.value} value={m.value}>{m.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpenseDateFilter;
