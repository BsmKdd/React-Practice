import classes from './UserItem.module.css';

const UserItem = (props) => {
	return (
		<li>
			<div className={classes['user-item']}>
				<h2>
					{props.username} ({props.age} years old)
				</h2>
			</div>
		</li>
	);
};

export default UserItem;
