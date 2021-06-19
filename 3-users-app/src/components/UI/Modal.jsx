import React from 'react';

import classes from './Modal.module.css';
import Button from './Button';
import Card from './Card';

const Modal = (props) => {
	return (
		<div>
			<div className={classes.backdrop} onClick={props.onCancel} />
			<Card className={classes.modal}>
				<header className={classes.header}>
					<h2>{props.details.header}</h2>
				</header>
				<div className={classes.content}>
					<p>{props.details.message}</p>
				</div>
				<footer className={classes.actions}>
					<Button type="button" onClick={props.onCancel}>
						Okay
					</Button>
				</footer>
			</Card>
		</div>
	);
};

export default Modal;
