import React from "react";
import "./ExpenseTracker.css";

const Overview = ({ expense, toggle, setToggle, budget }) => {
	const balance = budget - expense;
	return (
		<div className='overviewContainer'>
			<h3>Balance:${balance}</h3>
			<button onClick={() => setToggle(!toggle)} className='canBtn'>
				{toggle ? "Cancel" : "ADD"}
			</button>
		</div>
	);
};

export default Overview;
