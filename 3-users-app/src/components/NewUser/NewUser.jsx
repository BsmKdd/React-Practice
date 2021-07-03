import React, { useState, Fragment } from 'react';

import classes from './NewUser.module.css';

import UserForm from './UserForm';
import Modal from '../UI/Modal';
import Card from '../UI/Card';

const NewUser = (props) => {
	const [invalid, setInvalid] = useState(false);
	const [errorDetails, setErrorDetails] = useState({});

	const saveUserDataHandler = (enteredUserData) => {
		const userData = {
			...enteredUserData,
		};
		props.onAddUser(userData);
	};

	const invalidInputHandler = (errorDetails) => {
		setErrorDetails(errorDetails);
		setInvalid(true);
	};

	const hideModal = () => {
		setInvalid(null);
	};

	return (
		<Fragment>
			{invalid && <Modal details={errorDetails} onCancel={hideModal}></Modal>}
			<Card className={`${classes['new-user']}`}>
				<UserForm
					onInvalidInput={invalidInputHandler}
					onSaveUserData={saveUserDataHandler}
				></UserForm>
			</Card>
		</Fragment>
	);
};

export default NewUser;
