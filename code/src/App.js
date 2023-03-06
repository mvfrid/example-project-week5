import React from 'react';
import data from './data.json';
import Header from './components/Header';   // If we used named export approach instead: import { Header } from 'components/Header';
import NewsList from './components/NewsList';

// Trying the default export approach in this tester

console.log(data, NewsList);


export const App = () => {
	return (
		<section>
			<Header title="Students seem to like React"/>
      <NewsList articlesList={data} />
		</section>
	);
};