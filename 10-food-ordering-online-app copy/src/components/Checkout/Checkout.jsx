import Modal from '../UI/Modal/Modal';
import CheckoutForm from './CheckoutForm';
import CartContext from '../../store/cart-context';
import useHttp from '../../hooks/use-https';
import { useContext } from 'react';

const Checkout = (props) => {
	const { isLoading, error, sendRequest: sendOrderRequest } = useHttp();
	const cartCtx = useContext(CartContext);

	const sendOrderHandler = async (orderDetails) => {
		const response = await sendOrderRequest({
			url: 'https://react-food-http-f9c12-default-rtdb.europe-west1.firebasedatabase.app/orders.json',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: { ...orderDetails, items: cartCtx.items },
		});
	};

	const confirmOrderHandler = async (details) => {
		await sendOrderHandler(details);
		cartCtx.emptyCart();
		props.onClose();
	};

	return (
		<Modal onClose={props.onClose}>
			<CheckoutForm
				onConfirm={confirmOrderHandler}
				onClose={props.onClose}
			></CheckoutForm>
		</Modal>
	);
};

export default Checkout;
