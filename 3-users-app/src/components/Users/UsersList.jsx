import UserItem from './UserItem';
import './UsersList.css';

const UsersList = (props) => {
	if (props.items.length === 0) {
		return <h3 className="expenses-list__fallback">Found no users.</h3>;
	}

	return (
		<ul className="users-list">
			{props.items.map((user) => (
				<UserItem key={user.id} username={user.username} age={user.age} />
			))}
		</ul>
	);
};

export default UsersList;
