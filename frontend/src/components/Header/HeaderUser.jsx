import React, { Component } from 'react';
import { connect } from 'react-redux'

class Username extends Component {

    render() {
        return (
            <div className="header__username">
                <span>{this.props.userName}</span>
            </div>
        );
    }
}

export default connect(
    state => ({
        userName: state.currentUser.user_name
    }),
    dispatch => ({})
  )(Username);