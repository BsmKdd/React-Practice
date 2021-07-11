import Modal from '../UI/Modal/Modal';
import CheckoutForm from './CheckoutForm';
import CartContext from '../../store/cart-context';
import useHttp from '../../hooks/use-https';
import { useContext } from 'react';
import classes from './Checkout.module.css';
import Spinner from '../UI/Spinner/Spinner';

const Checkout = (props) => {
  const { isLoading, error, sendRequest: sendOrderRequest } = useHttp();

  const cartCtx = useContext(CartContext);

  const confirmOrderHandler = () => {
    cartCtx.emptyCart();
    props.onClose();
  };

  const sendOrderHandler = async (orderDetails) => {
    sendOrderRequest(
      {
        url: 'https://react-food-http-f9c12-default-rtdb.europe-west1.firebasedatabase.app/orders.json',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          name: orderDetails.name,
          address: orderDetails.address,
          items: cartCtx.items,
        },
      },
      confirmOrderHandler
    );
  };

  return (
    <Modal onClose={props.onClose}>
      <CheckoutForm
        onConfirm={sendOrderHandler}
        onClose={props.onClose}
      ></CheckoutForm>
      {isLoading && (
        <Spinner className={classes['loading-indicator']}></Spinner>
      )}
      {error && <h2 className={classes['error-text']}>{error}</h2>}
    </Modal>
  );
};

export default Checkout;
