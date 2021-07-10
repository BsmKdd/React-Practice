import React from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';

import classes from './Modal.module.css';

const Backdrop = (props) => {
	return <div className={classes['backdrop']} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
	return <Card className={classes['modal']}>{props.children}</Card>;
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
	return (
		<React.Fragment>
			{ReactDOM.createPortal(
				<Backdrop onClose={props.onClose} />,
				portalElement
			)}
			{ReactDOM.createPortal(
				<ModalOverlay content={''} onClose={props.onClose}>
					{props.children}
				</ModalOverlay>,
				portalElement
			)}
		</React.Fragment>
	);
};

export default Modal;
