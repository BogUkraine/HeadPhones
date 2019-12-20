import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './styles/main.scss';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Queue from './components/Queue/Queue';
//import Visualizer from './components/Visualizer/Visualizer';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Route exact path="/login" component={ Login } />
				{this.props.user.length !== 0
                ?   <>
						<Route path="/main" component={ Header }/>
						<Route path="/main" component={ Main }/>
						<Route path="/main" component={ Queue }/>
						{/* <Visualizer /> */}
						<Footer />
					</>
                :   <div>You need to login!</div>
                }
			</BrowserRouter>
		);
	}
}

export default connect(
	state => ({
	  user: state.user,
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
