import react from "react";
import "./newExpenseForm.css";
const ExpenseForm = () => {
  const titleChangeHandler = (event) => {
    console.log(event.target.value);
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>TITLE: </label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>AMOUNT: </label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>DATE: </label>
          <input type="date" min="2019-01-01" max="2030-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">ADD EXPENSE</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
