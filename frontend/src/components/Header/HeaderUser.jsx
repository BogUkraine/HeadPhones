import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class Username extends Component {

    render() {
        return (
            <div className="header__username">
                <NavLink to="/main/settings" className="header__settings">{this.props.user.user_login}</NavLink>
            </div>
        );
    }
}

export default connect(
    state => ({
        user: state.user
    }),
    {}
  )(Username);