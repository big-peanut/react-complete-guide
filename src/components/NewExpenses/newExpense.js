import React from "react";
import "./newExpense.css";
import ExpenseForm from "./newExpenseForm";
const NewExpense = (props) => {
  const saveFormHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveFormHandler}></ExpenseForm>
    </div>
  );
};

export default NewExpense;
