import React, { Component } from 'react';
import { connect } from 'react-redux'

class Username extends Component {

    render() {
        return (
            <div className="header__username">
                <span>{this.props.user.user_login}</span>
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