import React, { useState, useRef } from 'react';

import classes from './MealItemForm.module.css';
import Input from '../UI/Input';

const MealItemForm = (props) => {
	const inputAmountRef = useRef();
	const [validAmount, setValidAmount] = useState(true);

	const onAddHandler = (event) => {
		event.preventDefault();

		const enteredAmount = inputAmountRef.current.value;
		const enteredAmountNumber = +enteredAmount;

		if (
			enteredAmount.trim().length === 0 ||
			enteredAmountNumber < 1 ||
			enteredAmountNumber > 5
		) {
			setValidAmount(false);
			return;
		}

		props.onAddItem(+inputAmountRef.current.value);
	};

	return (
		<form className={classes['form']} onSubmit={onAddHandler}>
			<Input
				ref={inputAmountRef}
				id={'amount_' + props.mealId}
				type="number"
				label="Amount"
				defaultValue={1}
				min={1}
				max={5}
			></Input>
			<button type="submit">+ Add</button>
			{!validAmount && <p>Please enter a valid amount (1-5).</p>}
		</form>
	);
};

export default MealItemForm;
