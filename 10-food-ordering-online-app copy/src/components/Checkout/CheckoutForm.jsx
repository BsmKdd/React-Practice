import { useRef } from 'react';
import Input from '../UI/Input/Input';
import useInput from '../../hooks/use-input';
import classes from './CheckoutForm.module.css';

const CheckoutForm = (props) => {
	const inputNameRef = useRef();
	const inputAddressRef = useRef();

	const isNotEmpty = (value) => value.trim() !== '';

	const {
		value: nameValue,
		isValid: nameIsValid,
		hasError: nameHasError,
		valueChangeHandler: nameChangeHandler,
		inputBlurHandler: nameBlurHandler,
		reset: resetName,
	} = useInput(isNotEmpty);

	const {
		value: addressValue,
		isValid: addressIsValid,
		hasError: addressHasError,
		valueChangeHandler: addressChangeHandler,
		inputBlurHandler: addressBlurHandler,
		reset: resetAddress,
	} = useInput(isNotEmpty);

	let formIsValid = false;

	if (nameIsValid && addressIsValid) {
		formIsValid = true;
	}

	const formSubmitHandler = (event) => {
		event.preventDefault();

		if (!formIsValid) {
			return;
		}

		resetName();
		resetAddress();
		props.onConfirm({ name: nameValue, address: addressValue });
	};

	const nameClasses = nameHasError
		? `${classes['form-control']} ${classes['invalid']}`
		: classes['form-control'];
	const addressClasses = addressHasError
		? `${classes['form-control']} ${classes['invalid']}`
		: classes['form-control'];

	return (
		<form action="" onSubmit={formSubmitHandler}>
			<div className={nameClasses}>
				<Input
					ref={inputNameRef}
					id="checkoutInputName"
					value={nameValue}
					type="text"
					label="Name:"
					onBlur={nameBlurHandler}
					onChange={nameChangeHandler}
				></Input>
				{nameHasError && (
					<p className={classes['error-text']}>Please enter a name.</p>
				)}
			</div>
			<div className={addressClasses}>
				<Input
					ref={inputAddressRef}
					id="checkoutInputAddress"
					value={addressValue}
					type="text"
					label="Address:"
					onBlur={addressBlurHandler}
					onChange={addressChangeHandler}
				></Input>
				{addressHasError && (
					<p className={classes['error-text']}>Please enter an address.</p>
				)}
			</div>
			<div className={classes['actions']}>
				<button
					type="submit"
					className={classes['button--alt']}
					onClick={props.onClose}
				>
					Cancel
				</button>
				<button
					type="submit"
					className={classes['button']}
					disabled={!formIsValid}
				>
					Confirm
				</button>
			</div>
		</form>
	);
};

export default CheckoutForm;
