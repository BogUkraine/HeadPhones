import React from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';

import './styles/main.scss';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';

const App = () => {
	return (
		<BrowserRouter>
      <Route path="/login" component={ Login }></Route>
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

export default App;
