import React, { useContext } from 'react';

import classes from './HeaderCartButton.module.css';
import CartIcon from './CartIcon';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
	const cartCtx = useContext(CartContext);

	return (
		<button onClick={props.onOpen} className={classes['button']}>
			<span className={classes['icon']}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes['badge']}>{cartCtx.items.length}</span>
		</button>
	);
};

export default HeaderCartButton;
