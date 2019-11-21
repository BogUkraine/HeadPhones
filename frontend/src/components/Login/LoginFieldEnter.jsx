import React, {Component} from 'react';

class LoginField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        console.log(this.state.value);
    }

	render() {
        let loginValue = this.props.value;

        return (
            <label className="form__login form__label">
                <span className="form__description">Login:</span>
                <input
                className="form__login_field"
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
                />
            </label>
        );
    }
}

export default LoginField;