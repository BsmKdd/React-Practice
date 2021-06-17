import React from 'react';

import UsersList from './UsersList';
import Card from '../UI/Card';
import './Users.css';

const Users = (props) => {
	return (
		<Card className="users">
			<UsersList items={props.items} />
		</Card>
	);
};

export default Users;
