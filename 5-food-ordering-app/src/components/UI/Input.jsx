import React from 'react';

import classes from './Input.module.css';

const Input = (props) => {
	return (
		<div className={classes['input']}>
			<label htmlFor={props.id}>{props.label}</label>
			<input
				type={props.type}
				id={props.id}
				value={props.value}
				onChange={props.changeHandler}
				min={props.min}
				max={props.max}
				// value={props.state.value}
				// onChange={props.changeHandler}
				// onBlur={props.validateHandler}
			/>
		</div>
	);
};

export default Input;
