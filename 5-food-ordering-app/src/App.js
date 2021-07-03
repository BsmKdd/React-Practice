import React, { useState } from 'react';

import Header from './components/Header/Header';
import MealsSummary from './components/MealsSummary/MealsSummary';
import AvailableMeals from './components/AvailableMeals/AvailableMeals';
import Cart from './components/Cart/Cart';

function App() {
	const [viewingCart, setViewingCart] = useState(false);

	const viewCart = () => {
		setViewingCart(true);
	};

	const hideCart = () => {
		setViewingCart(null);
	};

	return (
		<React.Fragment>
			<Header onOpen={viewCart} />
			<MealsSummary />
			<AvailableMeals />
			{viewingCart && <Cart onClose={hideCart}></Cart>}
		</React.Fragment>
	);
}

export default App;
