import React from "react";
import PropTypes from 'prop-types';

import Banner from '../../home/banner/Banner';

import AuthenticatorService from '../AuthenticatorService';

import User from '../User';

import 'purecss-sass/vendor/assets/stylesheets/purecss/_forms.scss';
import 'purecss-sass/vendor/assets/stylesheets/purecss/_buttons.scss';

import './Registration.scss';

class Registration extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            conditions: false
        };

        this.isChecked = false;

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleConditionsChange = this.handleConditionsChange.bind(this);
    }

    handleEmailChange = (event) => {
        this.setState({ email: event.target.value });
    }
    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
    }
    handleFirstNameChange = (event) => {
        this.setState({ firstName: event.target.value });
    }
    handleLastNameChange = (event) => {
        this.setState({ lastName: event.target.value });
    }
    handleConditionsChange = ({target}) => {
        if (target.checked){
            target.removeAttribute('checked');
         } else {
            target.setAttribute('checked', true);
        }
        this.isChecked = !this.isChecked;
        this.setState({ conditions: this.isChecked });
    }

    registerUser = (event) => {
        const connectedUser = AuthenticatorService.register(new User(1, this.state.email, this.state.password, this.state.firstName, this.state.lastName));
        if(connectedUser !== null) {
            this.props.history.push('/rides');
        }

        event.preventDefault();
    }

    formValidity = () => {
        return this.state.firstName !== "" && this.state.lastName !== "" && this.state.email !== "" && this.state.password !== "" && this.isChecked;
    }

    render() {
        return (
            <div>
                <Banner title='Laissez vous guider' middle={false} background={true} />
                <div className="container over-form">
                    <form className="pure-form pure-form-stacked">
                        <fieldset>
                            <div className="box wrapped">
                                <div className="separated-group">
                                    <label htmlFor="registerFirstName">Prénom</label>
                                    <input id="registerFirstName" type="text" placeholder="Prénom"
                                    value={this.state.firstName} onChange={this.handleFirstNameChange} ></input>

                                    <label htmlFor="registerLastName">Nom</label>
                                    <input id="registerLastName" type="text" placeholder="Nom"
                                    value={this.state.lastName} onChange={this.handleLastNameChange} ></input>
                                </div>

                                <div className="separated-group">
                                    <label htmlFor="registerEmail">Email</label>
                                    <input id="registerEmail" type="email" placeholder="Email"
                                    value={this.state.email} onChange={this.handleEmailChange} ></input>

                                    <label htmlFor="registerPassword">Mot de passe</label>
                                    <input id="registerPassword" type="password" placeholder="Mot de passe"
                                    value={this.state.password} onChange={this.handlePasswordChange}></input>
                                </div>

                                <label htmlFor="registerConditions" className="pure-checkbox">
                                    <input id="registerConditions" type="checkbox" onClick={this.handleConditionsChange}></input> J'ai lu et accepté les conditions d'utilisation
                                </label>
                                <button type="submit" value="Submit" className={`pure-button button-primary center ${this.formValidity() ? "" : "pure-button-disabled"}`} onClick={this.registerUser}>Connection</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}

Registration.defaultProps = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    conditions: false
};

Registration.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    conditions: PropTypes.bool
};

export default Registration;