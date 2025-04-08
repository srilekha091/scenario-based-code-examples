import React, { useState } from "react";
import "./ExpenseTracker.css";

const AddTransaction = ({ balance, toggle }) => {
	const [budget, setBudget] = useState(0);
	const [expense, setExpense] = useState(0);

	return (
		<div>
			<form className='addTransactionContainer'>
				<label>Name:</label>
				<input type='text' placeholder='pls add an item' />
				<label>Expense:</label>
				<input type='text' placeholder='pls add the expense' />
				<div className='radioBtnSection'>
					<input type='radio' id='expenseId' />
					<label htmlFor='expenseId'>Expense</label>
					<input type='radio' id='budgetId'></input>
					<label htmlFor='budgetId'>Budget</label>
				</div>
				<button type='button' className='addBtn'>
					Add Transaction
				</button>
			</form>
		</div>
	);
};

export default AddTransaction;
