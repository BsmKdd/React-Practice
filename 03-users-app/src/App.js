import { useState } from 'react';
import Users from './components/Users/Users';
import NewUser from './components/NewUser/NewUser';

function App() {
	const [users, setUsers] = useState([]);

	const addUserHandler = (user) => {
		user.id = 'e' + (users.length + 1).toString;
		setUsers((prevUser) => {
			return [user, ...prevUser];
		});
	};

	return (
		<div>
			<NewUser onAddUser={addUserHandler}></NewUser>
			<Users items={users} />
		</div>
	);
}

export default App;
