import React, { Component } from 'react';
import { connect } from 'react-redux'

class Username extends Component {

    render() {
        return (
            <div className="header__username">
                <span>{this.props.currentUser.user_name}</span>
            </div>
        );
    }
}

export default connect(
    state => ({
        currentUser: state.currentUser
    }),
    dispatch => ({})
  )(Username);