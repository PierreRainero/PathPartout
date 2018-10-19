import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import AuthenticatorService from '../../components/connection/AuthenticatorService';

/**
 * Allow to create a securised route (protected by a guard)
 * @param {*} component props for the component 
 */
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        AuthenticatorService.isLogged()
            ? <Component {...props} />
            : <Redirect to='/login' />
    )} />
)

export default PrivateRoute;