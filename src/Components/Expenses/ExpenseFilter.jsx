import React from 'react'
import './ExpenseFilter.css'

const ExpenseFilter = (props) => {

const dropdownChangeHandler = (event) => {
  props.onChangeFilter(event.target.value);
};

  return (
    <div>
      
            <div className='expenses-filter'>
              <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select className='expenses-filter__dropdown' value={props.selected} onChange={dropdownChangeHandler}> 
                  <option value='All'>All</option>
                  <option value='2025'>2025</option>
                  <option value='2024'>2024</option>
                  <option value='2023'>2023</option>
                  <option value='2022'>2022</option>
                  <option value='2021'>2021</option>
                  <option value='2020'>2020</option>
                  <option value='2019'>2019</option>                        
                  <option value='2018'>2018</option>
                </select>
              </div>
            </div>
      
    </div>
  )
}

export default ExpenseFilter
