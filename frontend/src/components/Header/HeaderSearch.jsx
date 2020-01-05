import React, { Component } from 'react';

import img from '../../images/search1.png';
import { Redirect } from 'react-router';
import {connect} from 'react-redux';
import fetchSearch from '../../actions/fetchSearch';

class HeaderSearch extends Component {
    constructor(props){
        super(props);
        this.state = {
            toSongs: false,
        }
    }

    onSearch(event) {
        event.stopPropagation();
        const searchField = document.getElementById('search');

        if(searchField.value !== '' || searchField.value.length >= 30) {
            this.props.fetchSearch(searchField.value);
            this.setState({toSongs: true});
            setTimeout(() => {
                this.setState({toSongs: false}); 
            }, 500)
        }      
    }

    render() {
        return (
            <label className="header__search">
                {this.state.toSongs ? <Redirect to="/main/search" /> : null}
                <input className="header__field" type="text" placeholder="Search" id="search"/>
                <img className="header__search_image"
                src={img} alt="search"
                onClick={(e) => this.onSearch(e)}/>
            </label>
        );
    }
}

export default connect(
    state => ({
        user: state.user
    }),
    {
        fetchSearch: fetchSearch,
    }
  )(HeaderSearch);
