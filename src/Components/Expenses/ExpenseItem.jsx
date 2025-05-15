import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Cards from "../Cards/Cards";

const ExpenseItem = (props) => {
  const title = useState(props.title);

  return (
    <li>
      <Cards className="expense-item">
        <ExpenseDate date={props.date} />
          <div className="expense-item__date"></div>
            <div className="expense-item__description">
             <h2>{title}</h2>
            <div className="expense-item__price">Ksh {props.amount}</div>
          </div>
      </Cards>
    </li>
  );
};

export default ExpenseItem;
