import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
	return (
		<section>
			<h2>The Products Page</h2>
			<ul>
				<li>
					<Link to="/products/p1">The first product</Link>
				</li>
				<li>
					<Link to="/products/p2">The second product</Link>
				</li>
				<li>
					<Link to="/products/p3">The third product</Link>
				</li>
			</ul>
		</section>
	);
};

export default Products;
