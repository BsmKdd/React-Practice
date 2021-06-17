import Card from '../UI/Card';
import './UserItem.css';

const UserItem = (props) => {
	return (
		<li>
			<Card className="user-item">
				<div className="user-item__description">
					<h2>
						{props.username} ({props.age} years old)
					</h2>
				</div>
			</Card>
		</li>
	);
};

export default UserItem;
