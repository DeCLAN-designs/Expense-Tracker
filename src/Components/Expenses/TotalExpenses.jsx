import React from 'react';

const TotalExpenses = ({ total }) => (
  <div className="total-expenses">
    <h3 style={{ textAlign: 'left' }}>
      Total Expenses for Selected Period: Ksh {total.toFixed(2)}
    </h3>
  </div>
);

export default TotalExpenses;
