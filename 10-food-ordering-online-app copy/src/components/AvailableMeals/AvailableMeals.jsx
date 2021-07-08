import React, { useEffect, useState } from 'react';

import classes from './AvailableMeals.module.css';
import Card from '../UI/Card/Card';
import MealItem from '../MealItem/MealItem';
import useHttp from '../../hooks/use-https';
import Spinner from '../UI/Spinner/Spinner';

const AvailableMeals = () => {
	const [meals, setMeals] = useState([]);
	const { isLoading, error, sendRequest: fetchMeals } = useHttp();

	useEffect(() => {
		const transformMeals = (mealObj) => {
			const loadedMeals = [];

			for (const mealKey in mealObj) {
				loadedMeals.push({
					id: mealKey,
					name: mealObj[mealKey].name,
					description: mealObj[mealKey].description,
					price: mealObj[mealKey].price,
				});
			}
			setMeals(loadedMeals);
		};
		fetchMeals(
			{
				url: 'https://react-food-http-f9c12-default-rtdb.europe-west1.firebasedatabase.app/meals.json',
			},
			transformMeals
		);
	}, [fetchMeals]);

	let content = (
		<div className={classes['loading']}>
			Fetching meals &nbsp;&nbsp; <Spinner></Spinner>
		</div>
	);

	if (!isLoading && !error) {
		content = (
			<ul>
				{meals.map((meal) => (
					<MealItem
						key={meal.id}
						mealId={meal.id}
						mealName={meal.name}
						mealDescription={meal.description}
						mealPrice={meal.price}
						value="1"
					></MealItem>
				))}
			</ul>
		);
	} else if (error) {
		content = (
			<div className={classes['error-div']}>
				<h2 className={classes['error-text']}>Something went wrong!</h2>
				<button onClick={fetchMeals}>Try again</button>
			</div>
		);
	}

	return <Card className={classes['meals']}>{content}</Card>;
};

export default AvailableMeals;
