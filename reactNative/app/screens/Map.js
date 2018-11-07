import {Component} from "react";
import {View, Fab, Icon} from "native-base";
import React from "react";
import {StyleSheet} from "react-native";
import MapView, {Marker, Polyline} from "react-native-maps";

const path = [
    {
        latitude: 43.616100,
        longitude: 7.073171
    },
    {
        latitude: 43.617911,
        longitude: 7.074644
    },
    {
        latitude:43.622734,
        longitude: 7.0756081
    },
    {
        latitude: 43.620458,
        longitude: 7.070573
    }
];
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
        this.setRegionToUserLocation();
    }

    getMarkerInfos(index, size){
        switch(index){
            case 0:
                return {
                    name: 'Point de départ',
                    image: startMarker
                };
            case size-1:
                return {
                    name: 'Arrivée',
                    image: finishMarker
                };
            default:
                return null;
        }
    }

    setRegionToUserLocation(){
        return new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(position => this.setState({region: {...this.state.region, latitude: position.coords.latitude, longitude: position.coords.longitude}}), e => reject(e)));
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
                    {path.map((marker, i) => {
                        const markerInfos = this.getMarkerInfos(i, path.length);
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
                <Fab
                    active={this.state.active}
                    containerStyle={{ }}
                    style={{ backgroundColor: '#009b00' }}
                    position="bottomRight"
                    onPress={() => this.setState({ active: !this.state.active })}>
                    <Icon name="md-walk" />
                </Fab>
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