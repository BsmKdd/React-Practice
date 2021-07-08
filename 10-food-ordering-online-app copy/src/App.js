import React, { useState } from 'react';

import Header from './components/Header/Header';
import MealsSummary from './components/MealsSummary/MealsSummary';
import AvailableMeals from './components/AvailableMeals/AvailableMeals';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import { CartContextProvider } from './store/cart-context';

function App() {
	const [viewingCart, setViewingCart] = useState(false);
	const [checkingout, setCheckingout] = useState(false);

	const viewCart = () => {
		setViewingCart(true);
	};

	const hideCart = () => {
		setViewingCart(null);
	};

	const viewCheckout = () => {
		setCheckingout(true);
	};

	const hideCheckout = () => {
		setCheckingout(false);
	};

	return (
		<CartContextProvider>
			<Header onOpen={viewCart} />
			<MealsSummary />
			<AvailableMeals />
			{viewingCart && <Cart onClose={hideCart} onOrder={viewCheckout}></Cart>}
			{checkingout && <Checkout onClose={hideCheckout}></Checkout>}
		</CartContextProvider>
	);
}

export default App;
