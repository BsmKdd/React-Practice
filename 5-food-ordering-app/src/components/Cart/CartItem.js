import React, { useContext } from 'react';

import CartContext from '../../store/cart-context';
import classes from './CartItem.module.css';

const CartItem = (props) => {
	const price = `${props.price.toFixed(2)}`;

	const cartCtx = useContext(CartContext);

	const incrementItemHandler = () => {
		cartCtx.addItem({ id: props.id, price: props.price, amount: 1 });
	};

	const removeItemHandler = () => {
		cartCtx.removeItem(props.id);
	};

	return (
		<li className={classes['cart-item']}>
			<div>
				<h2>{props.name}</h2>
				<div className={classes.summary}>
					<span className={classes.price}>{price}</span>
					<span className={classes.amount}>x {props.amount}</span>
				</div>
			</div>
			<div className={classes.actions}>
				<button onClick={removeItemHandler}>−</button>
				<button onClick={incrementItemHandler}>+</button>
			</div>
		</li>
	);
};

export default CartItem;
