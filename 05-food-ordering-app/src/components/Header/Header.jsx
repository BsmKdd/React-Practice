import React from 'react';

import HeaderCartButton from './HeaderCartButton';
import banner from './meals.jpg';

import classes from './Header.module.css';

const Header = (props) => {
	return (
		<React.Fragment>
			<header className={classes['header']}>
				<h1>ReactMeals</h1>
				<HeaderCartButton onOpen={props.onOpen} itemsCount={''} />
			</header>
			<div className={classes['main-image']}>
				<img src={banner} alt="" />
			</div>
		</React.Fragment>
	);
};

export default Header;
