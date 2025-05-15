 import React from 'react'
 import './ExpenseDate.css'
import Cards from '../Cards/Cards'
 
 
 const ExpenseDate = (props) => {

    const day =props.date.toLocaleDateString('en-US',{day:'2-digit'})  
    const month = props.date.toLocaleDateString('en-US',{month:'long'})
    const year = props.date.getFullYear()
      
   return (
     <Cards className='expense-date'>
       <div className='expense-date__day'>{day}</div>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
    </Cards>
   )
 }
 
 export default ExpenseDate
 