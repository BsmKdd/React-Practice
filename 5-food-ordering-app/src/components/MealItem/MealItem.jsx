import React from 'react';

import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
	return (
		<li className={classes['meal']}>
			<div>
				<h3>{props.mealName}</h3>
				<p className={classes['description']}>{props.mealDescription}</p>
				<span className={classes['price']}>${props.mealPrice.toFixed(2)}</span>
			</div>
			<MealItemForm
				mealId={props.mealId}
				mealName={props.mealName}
				mealPrice={props.mealPrice}
			/>
		</li>
	);
};

export default MealItem;
