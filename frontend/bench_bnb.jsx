import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import {login, logout, signup} from './actions/session_action'
import Root from './components/root'

import * as action from './actions/session_action'
import { fetchBenches } from './actions/bench_actions'

document.addEventListener("DOMContentLoaded", () => {
  // const store = configureStore();
  
  
  let store;
	if (window.currentUser) {
		const preloadedState = {
			entities: {
				users: { [window.currentUser.id]: window.currentUser },
			},
			session: { id: window.currentUser.id },
		};
		store = configureStore(preloadedState);
		delete window.currentUser;
	} else {
    store = configureStore();
	}
  
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.store = store;
  window.action = action;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchBenches = fetchBenches;



  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});
