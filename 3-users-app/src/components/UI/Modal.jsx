import React from 'react';

import './Modal.css';

const Modal = (props) => {
	const classes = 'modal ' + props.className;
	return (
		<div className={classes}>
			<div className="modal-content">
				<header>{props.details.header}</header>
				<div className="modal-message">{props.details.message}</div>
				<footer>
					{' '}
					<button type="button" onClick={props.onCancel}>
						Okay
					</button>
				</footer>
			</div>
		</div>
	);
};

export default Modal;
