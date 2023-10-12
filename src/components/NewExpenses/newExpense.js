import React from "react";
import "./newExpense.css";
import ExpenseForm from "./newExpenseForm";
const NewExpense = () => {
  return (
    <div className="new-expense">
      <ExpenseForm></ExpenseForm>
    </div>
  );
};

export default NewExpense;
