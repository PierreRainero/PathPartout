import {Component} from "react";
import {View} from "native-base";
import React from "react";
import {StyleSheet, Alert} from "react-native";
import MapView, {Marker, Polyline} from "react-native-maps";
import Permissions from 'react-native-permissions';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';

export default class Home extends Component<Props> {

    state = {
        region: {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
        },
    };

    componentDidMount() {
        console.log(this.getLocation());
        this.getLocation().then(
            position => {
                if (position) {
                    this.setState({
                        region: {
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                            latitudeDelta: 0.003,
                            longitudeDelta: 0.003,
                        },
                    });
                }
            });
    }

    async checkLocationEnabled() {
        return await Permissions.request('location', {
            rationale: {
                title: 'Accès à la localisation',
                message: 'Voulez vous autoriser Path\'Partout à acceder à votre localisation ?',
            },
        }).then(response => {
            if (response != 'authorized')
                return false;
            return RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({interval: 10000, fastInterval: 5000})
                    .then(() => true)
                    .catch(() => false);
        });
    }

    getLocation(){
        return this.checkLocationEnabled().then((result) => {
            if(result === true)
                return new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(position => resolve(position), e => reject(e)));
            else
                Alert.alert('Erreur', 'La localisation n\'est pas activée.');
        });
    }

    render() {
        const mapStyle = require('../assets/customMapStyle.json');
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    region={this.state.region}
                    customMapStyle={mapStyle}
                    showsUserLocation={true}
                    showsMyLocationButton={true}
                >
                    <Marker
                        coordinate={{
                            latitude: 43.622319,
                            longitude: 7.049978
                        }}
                        title={"Test"}
                        description={"Description"}
                    />
                    <Marker
                        coordinate={{
                            latitude: 43.623538,
                            longitude: 7.047784
                        }}
                        title={"Test2"}
                        description={"Description"}
                    />
                    <Polyline
                        coordinates={[
                            {
                                latitude: this.state.region.latitude,
                                longitude: this.state.region.longitude
                            },
                            {
                                latitude: 43.622319,
                                longitude: 7.049978
                            },
                            {
                                latitude: 43.623538,
                                longitude: 7.047784
                            }
                        ]}
                        strokeColor="#F00"
                        fillColor="rgba(255,0,0,0.5)"
                        strokeWidth={1}
                    />
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});