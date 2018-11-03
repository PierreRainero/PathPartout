import {Component} from "react";
import {View, Text} from "native-base";
import React from "react";
import {StyleSheet, Alert} from "react-native";
import MapView, {Marker, Polyline} from "react-native-maps";
import Permissions from 'react-native-permissions';

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
                <MapView
                    style={styles.map}
                    region={this.state.region}
                    customMapStyle={mapStyle}
                    followsUserLocation={true}
                    showsMyLocationButton={true}
                    showsUserLocation={true}
                >
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