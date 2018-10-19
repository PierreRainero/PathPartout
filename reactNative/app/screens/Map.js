import {Component} from "react";
import {View, Text} from "native-base";
import React from "react";
import {StyleSheet, Alert} from "react-native";
import MapView, {Marker, Polyline} from "react-native-maps";
import Permissions from 'react-native-permissions';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';

const path = [
    {
        latitude: 43.616100,
        longitude: 7.073171,
        type: 'start'
    },
    {
        latitude: 43.617911,
        longitude: 7.074644
    },
    {
        latitude:43.622734,
        longitude: 7.0756081,
        type: 'picnic'
    },
    {
        latitude: 43.620458,
        longitude: 7.070573,
        type: 'finish'
    }
];
const picnicMarker = require('../assets/img/picnic.png');
const startMarker = require('../assets/img/start.png');
const finishMarker = require('../assets/img/finish.png');

export default class Home extends Component<Props> {

    state = {
        region: {
            latitude: 0,
            longitude: 0,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
        },
        userLocation: null
    };

    componentDidMount() {
        this.mounted = true;
        this.checkLocationEnabled().then((result) => {
            if(result === true)
                this.watchLocation();
            else
                Alert.alert('Erreur', 'La localisation n\'est pas activée.');
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

    watchLocation() {
        this.watchID = navigator.geolocation.watchPosition((position) => {
            if(this.state.userLocation) {
                const userLastPosition = this.state.userLocation;
                const userPosition = position.coords;
                alert("checking position...");
                if (userPosition.latitude != userLastPosition.latitude || userPosition.longitude != userLastPosition.longitude) {
                    alert("position changed");
                    this.setState({userLocation: userPosition,
                        region: {
                            ...this.state.region,
                            latitude: userPosition.latitude,
                            longitude: userPosition.longitude
                        }
                    });
                }
            } else {
                const userPosition = position.coords;
                this.setState({userLocation: userPosition,
                    region: {
                        ...this.state.region,
                        latitude: userPosition.latitude,
                        longitude: userPosition.longitude
                    }
                });
            }
        }, null, {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 5000,
        });
    }

    componentWillUnmount() {
        this.mounted = false;
        if (this.watchID) navigator.geolocation.clearWatch(this.watchID);
    }

    getMarkerInfos(type){
        switch(type){
            case 'start':
                return {
                    name: 'Point de départ',
                    image: startMarker
                };
            case 'finish':
                return {
                    name: 'Arrivée',
                    image: finishMarker
                };
            case 'picnic':
                return {
                    name: 'Pause repas',
                    image: picnicMarker
                };
            default:
                return null;
        }
    }

    render() {
        const mapStyle = require('../assets/customMapStyle.json');
        const markerImage = require('../assets/img/hiker.png');
        return (
            <View style={styles.container}>
                { this.state.userLocation ?
                    <MapView
                        style={styles.map}
                        region={this.state.region}
                        customMapStyle={mapStyle}
                    >
                        <Marker
                            style={{zIndex: 1000}}
                            coordinate={this.state.userLocation}
                            image={markerImage}
                            anchor={{x:0.5,y:0.5}}
                        />
                        {path.map((marker, i) => {
                            const markerInfos = this.getMarkerInfos(marker.type);
                            if(markerInfos)
                                return (
                                    <Marker
                                        key={i}
                                        coordinate={marker}
                                        title={markerInfos.name}
                                        image={markerInfos.image}
                                        anchor={markerInfos.image ? {x:0.5, y:0.5} : null}
                                    />
                                );
                            else
                                return null;
                        })}
                        <Polyline
                            coordinates={path}
                            strokeColor="#F00"
                            fillColor="rgba(255,0,0,0.5)"
                            strokeWidth={1}
                        />
                    </MapView>
                    : <Text>Loading map...</Text>
                }
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