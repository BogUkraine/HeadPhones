import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

import './styles/main.scss';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';

class App extends Component {
	render() {
		console.log("render redux", this.props.testStore);
		return (
			<BrowserRouter>
				<Route exact path="/login" component={ Login }></Route>
				<Header />
				<Main />
				<Footer />
			</BrowserRouter>
		);
	}
}

export default connect(
	state => ({
	  testStore: state.users
	}),
	dispatch => ({
		onRefreshUsers: (data) => {
			dispatch({
				type: "REFRESH_USERS",
				payload: data
			})
		}
	})
  )(App);
