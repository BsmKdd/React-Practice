import { useContext, useRef } from 'react';

import classes from './ProfileForm.module.css';
import AuthContext from '../../store/auth-context';
import { useHistory } from 'react-router-dom';

const ProfileForm = () => {
    const history = useHistory();
    const newPasswordInputRef = useRef();
    const authContext = useContext(AuthContext);

    const submitHandler = async (event) => {
        event.preventDefault();

        const enteredNewpassword = newPasswordInputRef.current.value;

        // valid

        const response = await fetch(
            'https://identitytoolkit.googleapis.com/v1/accounts:update?key=' +
                'AIzaSyCh9Z53ClqQBiUyPMQ7zQT2WOEaedgT8j0',
            {
                method: 'POST',
                body: JSON.stringify({
                    idToken: authContext.token,
                    password: enteredNewpassword,
                    returnSecureToken: false,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        const data = await response.json();
        history.replace('/');
        //Assume no error
    };

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <div className={classes.control}>
                <label htmlFor="new-password">New Password</label>
                <input
                    ref={newPasswordInputRef}
                    type="password"
                    id="new-password"
                    minLength="7"
                />
            </div>
            <div className={classes.action}>
                <button>Change Password</button>
            </div>
        </form>
    );
};

export default ProfileForm;
