import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Settings extends Component {

    onLight() {
        console.log('light')
    }

    onDark() {
        console.log('dark')
    }

    render() {
        return(
            <div className="settings">
                <div className="settings__theme">
                    <h3>Change HeadPhones' theme</h3>
                    <label className="settings__change_theme">
                        <input className="styled_radio" type="radio"
                        name="theme" id="theme_dark" value="Dark" defaultChecked
                        onClick={this.onDark.bind(this)} readOnly/>
                        <span className="radio_text">Dark (default)</span>
                    </label>
                    <label className="settings__change_theme">
                        <input className="styled_radio" type="radio"
                        name="theme" id="theme_light" value="Light"
                        onClick={this.onLight.bind(this)} readOnly/>
                        <span className="radio_text">Light</span>
                    </label>
                </div>
                <div className="settings__footer">
                    <NavLink to="/login" className="settings__to_login">Sign out</NavLink>
                    (c) 2020 Bohdan Lysov
                </div>
            </div>
        )
    }
}

export default Settings;