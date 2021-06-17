import React, { useState } from 'react';

import './NewUser.css';

import UserForm from './UserForm';
import Modal from '../UI/Modal';

const NewUser = (props) => {
	// const [isEditing, setIsEditing] = useState(false);
	const [invalid, setInvalid] = useState(false);
	const [errorDetails, setErrorDetails] = useState();

	const saveUserDataHandler = (enteredUserData) => {
		const userData = {
			...enteredUserData,
		};
		props.onAddUser(userData);
		// setIsEditing(false);
	};

	const invalidInputHandler = (errorDetails) => {
		setErrorDetails(errorDetails);
		setInvalid(true);
	};

	const hideModal = () => {
		setInvalid(false);
	};
	// const startEditingHandler = () => {
	// 	setIsEditing(true);
	// };

	// const stopEditingHandler = () => {
	// 	setIsEditing(false);
	// };

	return (
		<div className="new-user">
			<Modal
				details={errorDetails}
				className={invalid ? 'visible' : 'invisible'}
				onCancel={hideModal}
			></Modal>
			<UserForm
				onInvalidInput={invalidInputHandler}
				onSaveUserData={saveUserDataHandler}
			></UserForm>
		</div>
	);
};

export default NewUser;
