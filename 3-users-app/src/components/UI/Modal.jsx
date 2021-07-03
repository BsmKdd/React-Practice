import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';
import Button from './Button';
import Card from './Card';

const Backdrop = (props) => {
	return <div className={classes.backdrop} onClick={props.onCancel} />;
};

const ModalOverlay = (props) => {
	return (
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
	);
};
const Modal = (props) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(
				<Backdrop onCancel={props.onCancel} />,
				document.getElementById('backdrop-root')
			)}
			{ReactDOM.createPortal(
				<ModalOverlay
					details={{
						header: props.details.header,
						message: props.details.message,
					}}
					onCancel={props.onCancel}
				/>,
				document.getElementById('modal-root')
			)}
		</Fragment>
	);
};

export default Modal;
