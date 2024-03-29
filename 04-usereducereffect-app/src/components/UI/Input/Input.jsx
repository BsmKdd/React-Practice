import React, { useRef, useImperativeHandle } from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
	const inputRef = useRef();

	const activate = () => {
		inputRef.current.focus();
	};

	useImperativeHandle(ref, () => {
		return {
			focus: activate,
		};
	});

	return (
		<div
			className={`${classes.control} ${
				props.state.isValid === false ? classes.invalid : ''
			}`}
		>
			<label htmlFor={props.id}>{props.label}</label>
			<input
				type={props.type}
				id={props.id}
				value={props.state.value}
				onChange={props.changeHandler}
				onBlur={props.validateHandler}
			/>
		</div>
	);
});

export default Input;
