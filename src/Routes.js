import React from 'react';
import {
	Routes,
	Route,
	Redirect
} from 'react-router-dom';
import DogList from './DogList';
import FilterDogDetails from './FilterDogDetails';

function Routes ({ dogs }) {
	return (
		<Routes>
			<Route path="/" element={ <Home /> } />


			{/* <Route exact path="/dogs">
				<DogList dogs={ dogs } />
			</Route>
			<Route path="/dogs/:name">
				<FilterDogDetails dogs={ dogs } />
			</Route>
			<Redirect to="/dogs" /> */}
		</Routes>
	);
}

export default Routes;
