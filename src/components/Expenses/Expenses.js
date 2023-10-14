import React from "react";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  return (
    <div>
      {props.expenses.map((expense) => {
        return (
          <ExpenseItem
            key={Math.random().toString()}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </div>
  );
};

export default Expenses;
