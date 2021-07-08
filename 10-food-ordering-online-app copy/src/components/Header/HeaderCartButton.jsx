import React, { useState, useContext, useEffect } from 'react';

import classes from './HeaderCartButton.module.css';
import CartIcon from './CartIcon';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
	const cartCtx = useContext(CartContext);
	const [btnBumped, setBtnBumped] = useState(false);

	const { items } = cartCtx;

	const numberCartItems = items.reduce((curNumber, item) => {
		return curNumber + item.amount;
	}, 0);

	const btnClasses = `${classes['button']} ${btnBumped ? classes['bump'] : ''}`;

	useEffect(() => {
		if (items.length === 0) {
			return;
		}

		setBtnBumped(true);

		const timer = setTimeout(() => {
			setBtnBumped(false);
		}, 300);

		return () => {
			clearTimeout(timer);
		};
	}, [items]);

	return (
		<button onClick={props.onOpen} className={btnClasses}>
			<span className={classes['icon']}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes['badge']}>{numberCartItems}</span>
		</button>
	);
};

export default HeaderCartButton;
