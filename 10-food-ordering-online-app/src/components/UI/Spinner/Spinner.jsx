import classes from './Spinner.module.css';

const Spinner = (props) => {
	return (
		<svg
			className={`${classes['spinner']} ${props.className}`}
			viewBox="0 0 50 50"
		>
			<circle
				className={classes['path']}
				cx="25"
				cy="25"
				r="20"
				fill="none"
				strokeWidth="5"
			></circle>
		</svg>
	);
};

export default Spinner;