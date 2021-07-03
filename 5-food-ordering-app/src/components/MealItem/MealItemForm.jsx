import React, { useContext, useState } from 'react';

import classes from './MealItemForm.module.css';
import Input from '../UI/Input';
import CartContext from '../../store/cart-context';

const MealItemForm = (props) => {
	const [mealAmount, setMealAmount] = useState(1);

	const changeHandler = (event) => {
		setMealAmount(parseInt(event.target.value));
	};

	const cartCtx = useContext(CartContext);

	const onAddHandler = (event) => {
		event.preventDefault();
		cartCtx.addItem({
			id: props.mealId,
			name: props.mealName,
			price: props.mealPrice,
			amount: mealAmount,
		});
	};

	return (
		<form className={classes['form']} onSubmit={onAddHandler}>
			<Input
				type="number"
				id={props.id}
				label="Amount"
				value={mealAmount}
				min={1}
				max={5}
				changeHandler={changeHandler}
			></Input>
			<button type="submit">+ Add</button>
		</form>
	);
};

export default MealItemForm;
