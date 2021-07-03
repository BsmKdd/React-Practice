import React, {
	useState,
	useEffect,
	useReducer,
	useContext,
	useRef,
} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

const emailReducer = (state, action) => {
	if (action.type === 'USER_INPUT') {
		return { value: action.value, isValid: action.value.includes('@') };
	}

	if (action.type === 'INPUT_BLUR') {
		return { value: state.value, isValid: state.value.includes('@') };
	}

	return { value: '', isValid: false };
};

const passwordReducer = (state, action) => {
	if (action.type === 'USER_INPUT') {
		return {
			value: action.value,
			isValid: action.value.trim().length > 6,
		};
	}

	if (action.type === 'INPUT_BLUR') {
		return {
			value: state.value,
			isValid: state.value.trim().length > 6,
		};
	}
};

const Login = () => {
	// const [enteredEmail, setEnteredEmail] = useState('');
	// const [emailIsValid, setEmailIsValid] = useState();
	// const [enteredPassword, setEnteredPassword] = useState('');
	// const [passwordIsValid, setPasswordIsValid] = useState();
	const [formIsValid, setFormIsValid] = useState(false);

	const [emailState, dispatchEmail] = useReducer(emailReducer, {
		value: '',
		isValid: null,
	});

	const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
		value: '',
		isValid: null,
	});

	const authCtx = useContext(AuthContext);

	const emailInputRef = useRef();
	const passwordInputRef = useRef();

	useEffect(() => {
		console.log('EFFECT RUNNING');

		return () => {
			console.log('EFFECT CLEANUP');
		};
	}, []);

	const { isValid: emailIsValid } = emailState;

	useEffect(() => {
		const identifier = setTimeout(() => {
			console.log('Checking form validity!');
			setFormIsValid(emailState.isValid && passwordState.isValid);
		}, 500);

		return () => {
			console.log('CLEANUP');
			clearTimeout(identifier);
		};
	}, [emailState.isValid, passwordState.isValid]);

	const emailChangeHandler = (event) => {
		dispatchEmail({ type: 'USER_INPUT', value: event.target.value });

		// setFormIsValid(event.target.value.includes('@') && passwordState.isValid);
	};

	const passwordChangeHandler = (event) => {
		dispatchPassword({
			type: 'USER_INPUT',
			value: event.target.value,
		});

		// setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
	};

	const validateEmailHandler = () => {
		dispatchEmail({ type: 'INPUT_BLUR' });
	};

	const validatePasswordHandler = () => {
		dispatchPassword({ type: 'INPUT_BLUR' });
	};

	const submitHandler = (event) => {
		event.preventDefault();
		if (formIsValid) {
			authCtx.onLogin(emailState.value, passwordState.value);
		} else if (!emailIsValid) {
			emailInputRef.current.activate();
		} else {
			passwordInputRef.current.activate();
		}
	};

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<Input
					ref={emailInputRef}
					type="email"
					label="E-Mail"
					id="email"
					state={emailState}
					changeHandler={emailChangeHandler}
					validateHandler={validateEmailHandler}
				></Input>
				<Input
					ref={passwordInputRef}
					type="password"
					label="Password"
					id="password"
					state={passwordState}
					changeHandler={passwordChangeHandler}
					validateHandler={validatePasswordHandler}
				></Input>
				<div className={classes.actions}>
					<Button type="submit" className={classes.btn}>
						Login
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default Login;
