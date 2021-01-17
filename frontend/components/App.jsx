import React from 'react';
import GreetingContainer from "./greeting_container";
import { Route } from 'react-router-dom';
import LoginFormContainer from './session_forms/login_form_container';
import SignupFormContainer from './session_forms/signup_form_container';
import SearchContainer from './benches/search_container'
import {AuthRoute} from '../util/route_util'

const App = () => {
  return (
		<div>
			<header>
				<h1>Bench BnB</h1>
				<GreetingContainer />
			</header>

			<AuthRoute path="/login" component={LoginFormContainer} />
			<AuthRoute path="/signup" component={SignupFormContainer} />
			<Route exact path="/" component={SearchContainer} />
		</div>
	);
}

export default App;