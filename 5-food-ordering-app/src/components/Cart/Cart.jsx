import React, { useContext } from 'react';

import CartItem from './CartItem';
import Modal from '../UI/Modal';
import CartConext from '../../store/cart-context';
import classes from './Cart.module.css';

const Cart = (props) => {
	const cartCtx = useContext(CartConext);

	return (
		<Modal onClose={props.onClose}>
			<ul className={classes['cart-items']}>
				{cartCtx.items.map((item) => (
					<CartItem {...item} />
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
					<button className={classes['button']}>Order</button>
				)}
			</div>
		</Modal>
	);
};

export default Cart;
