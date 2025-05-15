import React from 'react'
import './ExpenseList.css'
import ExpenseItem from './ExpenseItem.jsx';

const ExpenseList = (props) => {

if (props.items.length === 0) {//Rendering Fallback Conditional Content to return(classname expenses-list)
  return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
}


   return (
    
   <ul className='expenses-list'>
      
        {props.items.map((expense) => (//Rendering List of Expenses
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
         
    </ul>
  )
}

export default ExpenseList
