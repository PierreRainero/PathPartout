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

import Home from "./app/screens/Home";
import Map from "./app/screens/Map";

type Props = {};
export default class App extends Component<Props> {

  state = {
    selectedTab: 'home'
  }

  render() {
    return (
        <StyleProvider  style={getTheme()}>
            <Container>
                { this.state.selectedTab === 'home' ? <Home /> : null }
                { this.state.selectedTab === 'map' ? <Map /> : null }
                { this.state.selectedTab === 'account' ? <Map /> : null }
                <Footer>
                    <FooterTab>
                        <Button
                            vertical
                            active={this.state.selectedTab === 'home' ? true : null}
                            onPress={() => this.setState({selectedTab: 'home'})}>
                            <Icon
                                active={this.state.selectedTab === 'home' ? true : null}
                                name="home" />
                            <Text>Accueil</Text>
                        </Button>
                        <Button
                            vertical
                            active={this.state.selectedTab === 'map' ? true : null}
                            onPress={() => this.setState({selectedTab: 'map'})}>
                            <Icon
                                active={this.state.selectedTab === 'map' ? true : null}
                                name="map" />
                            <Text>Carte</Text>
                        </Button>
                        <Button
                            vertical
                            active={this.state.selectedTab === 'account' ? true : null}
                            onPress={() => this.setState({selectedTab: 'account'})}>
                            <Icon
                                active={this.state.selectedTab === 'account' ? true : null}
                                name="md-people" />
                            <Text>Profil</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        </StyleProvider>
    );
  }
}
