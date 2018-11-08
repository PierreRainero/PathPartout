import React from "react";
import PropTypes from 'prop-types';

import Banner from '../../home/banner/Banner';

import AuthenticatorService from '../AuthenticatorService';

import 'purecss-sass/vendor/assets/stylesheets/purecss/_forms.scss';
import 'purecss-sass/vendor/assets/stylesheets/purecss/_buttons.scss';

import './Login.scss';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
        
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleEmailChange= (event) => {
        this.setState({ email: event.target.value });
    }
    handlePasswordChange= (event) => {
        this.setState({ password: event.target.value });
    }

    loginUser= (event) => {
        const connectedUser = AuthenticatorService.login(this.state.email, this.state.password);
        if(connectedUser !== null) {
            this.props.history.push('/rides');
        }

        event.preventDefault();
    }

    formValidity= () => {
        return this.state.email!=="" && this.state.password!=="";
    }

    render() {
        return (
            <div>
                <Banner title='Prêt à vivre une aventure' middle={false} background={true} />
                <div className="container over-form">
                    <form className="pure-form pure-form-stacked">
                        <fieldset>
                            <div className="box wrapped">
                                <label htmlFor="email">Email</label>
                                <input id="email" type="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} ></input>

                                <label htmlFor="password">Mot de passe</label>
                                <input id="password" type="password" placeholder="Mot de passe" value={this.state.password} onChange={this.handlePasswordChange}></input>

                                <button type="submit" value="Submit" className={`pure-button button-primary center ${this.formValidity()? "" : "pure-button-disabled"}`} onClick={this.loginUser}>Connection</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}

Login.defaultProps = {
    email: "",
    password: ""
};

Login.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string
};

export default Login;