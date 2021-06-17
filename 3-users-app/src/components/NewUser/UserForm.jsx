import React, { useState } from 'react';

import './UserForm.css';

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

		if (enteredUserName.length === 0 || enteredAge.length === 0) {
			props.onInvalidInput({
				header: 'Invalid input',
				message: 'Please enter a valid name and age (non-empty values).',
			});
		} else if (enteredAge < 1) {
			props.onInvalidInput({
				header: 'Invalid input',
				message: 'Please enter a valid age (>0).',
			});
		} else {
			const userData = {
				username: enteredUserName,
				age: +enteredAge,
			};

			props.onSaveUserData(userData);
			setEnteredUsername('');
			setEnteredAge('');
		}
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-user__controls">
				<div className="new-user__control">
					<label>Username</label>
					<input
						type="text"
						value={enteredUserName}
						onChange={usernameChangeHandle}
					/>
				</div>
				<div className="new-user__control">
					<label>Age (Years)</label>
					<input type="number" value={enteredAge} onChange={ageChangeHandler} />
				</div>
			</div>
			<div className="new-user__actions">
				<button type="submit">Add User</button>
			</div>
		</form>
	);
};

export default UserForm;
