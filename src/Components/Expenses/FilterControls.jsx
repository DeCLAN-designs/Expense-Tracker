import React from 'react';
import ExpenseDateFilter from './ExpenseDateFilter';

const FilterControls = ({ filter, setFilter, expenses, clearAll }) => {
  return (
    <div className="controls-container">
      <ExpenseDateFilter
        selectedYear={filter.year}
        selectedMonth={filter.month}
        onChange={setFilter}
      />
      {expenses.length > 0 && (
        <button onClick={clearAll} className="secondary-button">
          Clear All Expenses
        </button>
      )}
    </div>
  );
};

export default FilterControls;
