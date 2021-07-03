import React, { useRef } from 'react';

import classes from './UserForm.module.css';
import Button from '../UI/Button';

const UserForm = (props) => {
	const nameInputRef = useRef();
	const ageInputRef = useRef();

	const submitHandler = (event) => {
		event.preventDefault();

		const enteredUserName = nameInputRef.current.value;
		const enteredAge = ageInputRef.current.value;

		if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
			props.onInvalidInput({
				header: 'Invalid input',
				message: 'Please enter a valid name and age (non-empty values).',
			});
			return;
		}
		if (enteredAge < 1) {
			props.onInvalidInput({
				header: 'Invalid age',
				message: 'Please enter a valid age (>0).',
			});
			return;
		}

		const userData = {
			username: enteredUserName,
			age: +enteredAge,
		};

		props.onSaveUserData(userData);
		nameInputRef.current.value = '';
		ageInputRef.current.value = '';
	};

	return (
		<form onSubmit={submitHandler}>
			<div className={classes['new-user__controls']}>
				<div className={classes['new-user__control']}>
					<label>Username</label>
					<input type="text" ref={nameInputRef} />
				</div>
				<div className={classes['new-user__control']}>
					<label>Age (Years)</label>
					<input type="number" ref={ageInputRef} />
				</div>
			</div>
			<div className={classes['new-user__actions']}>
				<Button type="submit">Add User</Button>
			</div>
		</form>
	);
};

export default UserForm;
