import React from 'react';
import './App.css';

import NavBar from './Components/NavBar/navbar.jsx';
import Cards from './Components/Cards/Cards.jsx';
import NewExpense from './Components/NewExpense/NewExpense.jsx';
import ExpenseList from './Components/Expenses/ExpenseList.jsx';
import ExpenseChart from './Components/Expenses/ExpensesChart.jsx';
import FilterControls from './Components/Expenses/FilterControls.jsx';
import TotalExpenses from './Components/Expenses/TotalExpenses.jsx';

import { usePersistentExpenses } from './Hooks/usePersistentState';
import { useExpenseFilters } from './Hooks/useExpenseFilters';

const App = () => {
  const { expenses, addExpense, clearAll } = usePersistentExpenses();
  const { filter, setFilter, filteredExpenses, totalExpenses } = useExpenseFilters(expenses);

  return (
    <div className="App">
      <NavBar />
      <NewExpense onAddExpense={addExpense} />

      <Cards className="expenses">
        <FilterControls filter={filter} setFilter={setFilter} expenses={expenses} clearAll={clearAll} />
        <TotalExpenses total={totalExpenses} />
        <ExpenseChart expenses={filteredExpenses} />

        {filteredExpenses.length === 0 ? (
          <div className="empty-state">
            <p style={{ textAlign: 'center'}}>No expenses found for the selected period.</p>
          </div>
        ) : (
          <ExpenseList items={filteredExpenses} />
        )}
      </Cards>
    </div>
  );
};

export default App;
