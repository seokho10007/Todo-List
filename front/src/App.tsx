import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Global } from '@emotion/react';
import Main from './pages/Main';
import reset from './theme/reset';
import AppLayout from './components/UI/frames/AppLayout/AppLayout';
import SignIn from './pages/SignIn';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Global styles={reset} />
				<AppLayout>
					<Switch>
						<Route exact path="/" component={Main} />
						<Route exact path="/signin" component={SignIn} />
					</Switch>
				</AppLayout>
			</BrowserRouter>
		</>
	);
};

export default App;
