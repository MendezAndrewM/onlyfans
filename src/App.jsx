/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoadingScreen from './pages/LoadingScreen';
import Landing from './pages/Landing';
import './assets/styles/main.scss';

var App = () => {

	// const [userKey, setUserKey] = useState('')
	const [theme, setTheme] = useState('light');
	const dark = theme === 'dark';

	return (
		<Router className="App">
			{/* <Nav /> */}

			<Switch>
				<Route exact path={['/', '/*']}>
					{/* <LoadingScreen theme={theme} setTheme={setTheme}>
            <p className="ComingSoon"> Coming Soon - Under Construction</p>
          </LoadingScreen> */}
					<Landing />
				</Route>
				<Route>
					{/* <NoMatch /> */}
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
