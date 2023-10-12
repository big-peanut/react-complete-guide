import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/newExpense";

const App = () => {
  const expenses = [
    { title: "car insurance", amount: 299, date: new Date(2023, 2, 28) },
    { title: "laptop repair", amount: 199, date: new Date(2023, 2, 27) },
    { title: "long drive", amount: 999, date: new Date(2023, 2, 26) },
    { title: "internet bill", amount: 499, date: new Date(2023, 2, 25) },
  ];
  return (
    <div>
      <NewExpense />
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
};

export default App;
