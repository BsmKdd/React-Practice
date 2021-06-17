import React, { useState } from "react";

import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2020");

	const filterExpensesHandler = (filteredYear) => {
		setFilteredYear(filteredYear);
	};

	const filteredExpenses = props.data.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<Card className="expenses">
			<ExpenseFilter
				selected={filteredYear}
				onFilterExpense={filterExpensesHandler}
			/>
			<ExpensesChart expenses={filteredExpenses} />
			<ExpensesList data={filteredExpenses} />
		</Card>
	);
};

export default Expenses;
