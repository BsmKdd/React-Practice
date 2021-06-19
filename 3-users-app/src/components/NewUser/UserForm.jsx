import React, { useState } from 'react';

import classes from './UserForm.module.css';
import Button from '../UI/Button';

const UserForm = (props) => {
	const [enteredUserName, setEnteredUsername] = useState('');
	const [enteredAge, setEnteredAge] = useState('');

	const usernameChangeHandle = (event) => {
		setEnteredUsername(event.target.value);
	};
	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();

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
		setEnteredUsername('');
		setEnteredAge('');
	};

	return (
		<form onSubmit={submitHandler}>
			<div className={classes['new-user__controls']}>
				<div className={classes['new-user__control']}>
					<label>Username</label>
					<input
						type="text"
						value={enteredUserName}
						onChange={usernameChangeHandle}
					/>
				</div>
				<div className={classes['new-user__control']}>
					<label>Age (Years)</label>
					<input type="number" value={enteredAge} onChange={ageChangeHandler} />
				</div>
			</div>
			<div className={classes['new-user__actions']}>
				<Button type="submit">Add User</Button>
			</div>
		</form>
	);
};

export default UserForm;
