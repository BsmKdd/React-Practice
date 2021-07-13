import { useState, useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../store/auth-context';

import classes from './AuthForm.module.css';

const AuthForm = () => {
    const history = useHistory();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const authContext = useContext(AuthContext);

    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };

    const submitHandler = async (event) => {
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredpassword = passwordInputRef.current.value;

        setIsLoading(true);
        let url;
        if (isLogin) {
            url =
                'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
        } else {
            url =
                'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
        }

        try {
            const response = await fetch(
                url + 'AIzaSyCh9Z53ClqQBiUyPMQ7zQT2WOEaedgT8j0',
                {
                    method: 'POST',
                    body: JSON.stringify({
                        email: enteredEmail,
                        password: enteredpassword,
                        returnSecureToken: true,
                    }),
                    headers: { 'Content-Type': 'application/json' },
                }
            );
            setIsLoading(false);
            const data = await response.json();

            if (!response.ok) {
                let errorMessage = 'Authentication failed!';
                if (data && data.error && data.error.message) {
                    errorMessage = data.error.message;
                }
                throw new Error(errorMessage);
            }
            const expirationTime = new Date(
                new Date().getTime() + +data.expiresIn * 1000
            );
            authContext.login(data.idToken, expirationTime.toISOString());
            history.replace('/');
            return data;
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <section className={classes.auth}>
            <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
            <form onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="email">Your Email</label>
                    <input
                        ref={emailInputRef}
                        type="email"
                        id="email"
                        required
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="password">Your Password</label>
                    <input
                        ref={passwordInputRef}
                        type="password"
                        id="password"
                        required
                    />
                </div>
                <div className={classes.actions}>
                    {!isLoading ? (
                        <button>{isLogin ? 'Login' : 'Create Account'}</button>
                    ) : (
                        <p>Sending request...</p>
                    )}
                    <button
                        type="button"
                        className={classes.toggle}
                        onClick={switchAuthModeHandler}
                    >
                        {isLogin
                            ? 'Create new account'
                            : 'Login with existing account'}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default AuthForm;
