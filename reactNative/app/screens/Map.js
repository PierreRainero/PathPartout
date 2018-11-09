import {Component} from "react";
import {View, Fab, Icon, Text, Button, Header, Left, Body, Title, Card, CardItem, Image} from "native-base";
import React from "react";
import {StyleSheet, Modal, ScrollView, Alert} from "react-native";
import MapView, {Marker, Polyline} from "react-native-maps";
import SelectJourney from "./SelectJourney";
import POIDetails from "./POIDetails";

const path1 = [
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
const path2 = [
    {
        latitude: 43.623936,
        longitude: 7.048871
    },
    {
        latitude: 43.621788,
        longitude: 7.048894
    },
    {
        latitude: 43.620844,
        longitude: 7.049691
    },
    {
        latitude: 43.620176,
        longitude: 7.052588
    },
    {
        latitude: 43.620518,
        longitude: 7.055602
    }
];
const startMarker = require('../assets/img/start.png');
const finishMarker = require('../assets/img/finish.png');

export default class Home extends Component<Props> {

    state = {
        region: {
            latitude: null,
            longitude: null,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
        },
        userLocation: null,
        modalSelectVisible: false,
        modalDetailsVisible: false,
        detailsHasBeenShown: false,
        path: null
    };

    componentDidMount() {
        this.setRegionToUserLocation();
        navigator.geolocation.watchPosition(location => {
            if(this.state.path) {
                const distanceToPoint = this.distanceInKmBetweenEarthCoordinates(location.coords.latitude, location.coords.longitude, this.state.path[0].latitude, this.state.path[0].longitude);
                if(distanceToPoint < 0.01 && !this.state.detailsHasBeenShown) {
                    this.openModalDetails();
                    this.setState({detailsHasBeenShown: true});
                }
            }
        });
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
        if(this.state.region && this.state.path) {
            const distanceToPoint = this.distanceInKmBetweenEarthCoordinates(this.state.region.latitude, this.state.region.longitude, this.state.path[0].latitude, this.state.path[0].longitude);
            if(distanceToPoint < 0.01 && !this.state.detailsHasBeenShown) {
                this.state.modalDetailsVisible = !this.state.modalDetailsVisible;
                this.state.detailsHasBeenShown = true;
            }
        }
        return (
            <View style={styles.container}>
                {this.state.region.latitude && this.state.region.longitude ?
                    <MapView
                        style={styles.map}
                        region={this.state.region}
                        customMapStyle={mapStyle}
                        showsUserLocation={true}
                        showsMyLocationButton={true}
                    >
                        {
                            this.state.path ?
                                this.state.path.map((marker, i) => {
                                    const markerInfos = this.getMarkerInfos(i, this.state.path.length);
                                    if (markerInfos)
                                        return (
                                            <Marker
                                                key={i}
                                                coordinate={marker}
                                                title={markerInfos.name}
                                                image={markerInfos.image}
                                                anchor={markerInfos.image ? {x: 0.5, y: 0.5} : null}
                                                onPress={() => i === 0 ? this.openModalDetails() : null}
                                            />
                                        );
                                    else
                                        return (
                                            <Marker
                                                key={i}
                                                coordinate={marker}
                                            />
                                        );
                                })
                                : null
                        }
                        {
                            this.state.path ?
                                <Polyline
                                    coordinates={this.state.path}
                                    strokeColor="#F00"
                                    fillColor="rgba(255,0,0,0.5)"
                                    strokeWidth={1}
                                />
                                : null
                        }
                    </MapView>
                    : null
                }
                {this.state.region.latitude && this.state.region.longitude ?
                    < Fab
                    active = {this.state.active}
                    containerStyle={{}}
                    style={{backgroundColor: '#009b00'}}
                    position="bottomRight"
                    onPress={() => this.openModalSelect()}>
                    <Icon name="md-walk" />
                    </Fab>
                    : null
                }
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalSelectVisible}
                    onRequestClose={() => this.closeModalSelect()}>
                    <View>
                        <Header>
                            <Left>
                                <Button transparent onPress={() => this.closeModalSelect()}>
                                    <Icon name='arrow-back' />
                                </Button>
                            </Left>
                            <Body>
                            <Title>Mes randonnées</Title>
                            </Body>
                        </Header>
                        <SelectJourney onItemPressed={(i) => this.selectJourney(i)}/>
                    </View>
                </Modal>

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalDetailsVisible}
                    onRequestClose={() => this.closeModalDetails()}>
                    <View>
                        <Header>
                            <Left>
                                <Button transparent onPress={() => this.closeModalDetails()}>
                                    <Icon name='arrow-back' />
                                </Button>
                            </Left>
                            <Body>
                            <Title>Polytech Nice Sophia</Title>
                            </Body>
                        </Header>
                        <POIDetails/>
                    </View>
                </Modal>

            </View>
        );
    }

    openModalSelect(){
        this.setState({modalSelectVisible: true});
    }

    closeModalSelect(){
        this.setState({modalSelectVisible: false});
    }

    openModalDetails(){
        this.setState({modalDetailsVisible: true});
    }

    closeModalDetails(){
        this.setState({modalDetailsVisible: false});
    }

    selectJourney(i){
        let path = null;
        if(i === 1)
            path = path1;
        else
            path = path2;
        this.setState({modalSelectVisible: !this.state.modalSelectVisible, path: path});
    }

    degreesToRadians(degrees) {
        return degrees * Math.PI / 180;
    }

    distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
        let earthRadiusKm = 6371;

        let dLat = this.degreesToRadians(lat2-lat1);
        let dLon = this.degreesToRadians(lon2-lon1);

        lat1 = this.degreesToRadians(lat1);
        lat2 = this.degreesToRadians(lat2);

        let a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return earthRadiusKm * c;
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