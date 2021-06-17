import { useState } from 'react';
import Users from './components/Users/Users';
import NewUser from './components/NewUser/NewUser';

const DUMMY_USERS = [
	{
		id: 'u1',
		username: 'The first user',
		age: 27,
	},
	{
		id: 'u2',
		username: 'The second user',
		age: 31,
	},
	{
		id: 'u3',
		username: 'The third user',
		age: 19,
	},
];

function App() {
	const [users, setUsers] = useState(DUMMY_USERS);

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
