/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleProvider, Button, Container, Footer, FooterTab, Icon, Text} from 'native-base';
import getTheme from './native-base-theme/components';
import Permissions from "react-native-permissions";
import {Alert} from "react-native";
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';

import Home from "./app/screens/Home";
import Map from "./app/screens/Map";
import PermissionsScreen from "./app/screens/Permissions"

type Props = {};
export default class App extends Component<Props> {

    state = {
        currentPage: 'home'
    }
    connect = this.connect.bind(this);

    render() {
    return (
        <StyleProvider  style={getTheme()}>
            <Container>
                { this.state.currentPage === 'home' ? <Home callback={this.connect} /> : null }
                { this.state.currentPage === 'map' ? <Map /> : null }
                { this.state.currentPage === 'permissions' ? <PermissionsScreen /> : null }
            </Container>
        </StyleProvider>
    );
    }

    connect(){
      this.checkLocationEnabled();
    }

    async checkLocationEnabled() {
        await Permissions.check('location').then(authorized => {
            if(authorized === 'denied')
                this.setState({currentPage: 'permissions'});
            else
                RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({interval: 10000, fastInterval: 5000})
                    .then(data => {
                        this.setState({currentPage: 'map'});
                    }).catch(err => {
                        this.setState({currentPage: 'permissions'});
                });
        })
    }
}
