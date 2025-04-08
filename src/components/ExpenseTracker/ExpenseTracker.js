import React, { useState } from "react";
import AddTransaction from "./AddTransaction";
import Overview from "./Overview";
import "./ExpenseTracker.css";

const ExpenseTracker = () => {
	const [expense, setExpense] = useState(0);
	const [budget, setBudget] = useState(0);
	const [toggle, setToggle] = useState(true);

	return (
		<div className='container'>
			<h1 className='expenseHeading'>ExpenseTracker</h1>
			<Overview
				expense={expense}
				toggle={toggle}
				setToggle={setToggle}
				budget={budget}
			/>
			{toggle && (
				<AddTransaction toggle={toggle} expense={expense} budget={budget} />
			)}
		</div>
	);
};

export default ExpenseTracker;
