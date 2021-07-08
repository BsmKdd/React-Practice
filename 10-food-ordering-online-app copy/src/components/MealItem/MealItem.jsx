import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';

import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
	const cartCtx = useContext(CartContext);

	const onAddItemHandler = (amount) => {
		cartCtx.addItem({
			id: props.mealId,
			name: props.mealName,
			price: props.mealPrice,
			amount,
		});
	};

	return (
		<li className={classes['meal']}>
			<div>
				<h3>{props.mealName}</h3>
				<p className={classes['description']}>{props.mealDescription}</p>
				<span className={classes['price']}>${props.mealPrice.toFixed(2)}</span>
			</div>
			<MealItemForm mealId={props.mealId} onAddItem={onAddItemHandler} />
		</li>
	);
};

export default MealItem;
