import React, { useContext } from 'react';

import CartItem from './CartItem';
import Modal from '../UI/Modal/Modal';
import CartConext from '../../store/cart-context';
import classes from './Cart.module.css';

const Cart = (props) => {
	const cartCtx = useContext(CartConext);

	const incrementItemHandler = (item) => {
		cartCtx.addItem({ ...item, amount: 1 });
	};

	const removeItemHandler = (id) => {
		cartCtx.removeItem(id);
	};

	const orderClickHandler = () => {
		props.onClose();
		props.onOrder();
	};

	return (
		<Modal onClose={props.onClose}>
			<ul className={classes['cart-items']}>
				{cartCtx.items.map((item) => (
					<CartItem
						key={item.id}
						{...item}
						incrementItem={incrementItemHandler.bind(null, item)}
						removeItem={removeItemHandler.bind(null, item.id)}
					/>
				))}
			</ul>
			<div className={classes['total']}>
				<p>Total Amount</p>
				<p>${cartCtx.totalAmount.toFixed(2)}</p>
			</div>
			<div className={classes['actions']}>
				<button className={classes['button--alt']} onClick={props.onClose}>
					Close
				</button>
				{!(cartCtx.items.length === 0) && (
					<button className={classes['button']} onClick={orderClickHandler}>
						Order
					</button>
				)}
			</div>
		</Modal>
	);
};

export default Cart;
