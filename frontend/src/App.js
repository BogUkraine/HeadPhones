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

	componentDidMount() {
		axios.get("http://localhost:3210/users")
            .then( (response) => {
				console.log("axios we get", response.data);
				this.props.onRefreshUsers(response.data);
				console.log("axios redux ", this.props.testStore);
            })
            .catch(function (error) {
                console.log(error);
            });
	}

	render() {
		console.log("render redux", this.props.testStore);
		return (
			<BrowserRouter>
				<Route exact path="/login" component={ Login }></Route>
				<Route path="/home" component={ Header }></Route>
				<Route path="/home" component={ Main }></Route>
				<Route path="/home" component={ Footer }></Route>
				<Route path="/library" component={ Header }></Route>
				<Route path="/library" component={ Main }></Route>
				<Route path="/library" component={ Footer }></Route>
				<Route path="/playlist" component={ Header }></Route>
				<Route path="/playlist" component={ Main }></Route>
				<Route path="/playlist" component={ Footer }></Route>
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
