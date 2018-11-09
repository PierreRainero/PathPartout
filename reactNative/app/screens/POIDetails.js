import {Component} from "react";
import {Text, View, Button, Icon, Card, CardItem, Body} from "native-base";
import React from "react";
import {StyleSheet, Alert, ScrollView, Image} from "react-native";


export default class SelectJourney extends Component<Props> {

    state={
        permGranted: false,
        gpsEnabled: false
    }

    async componentDidMount(){

    }

    render() {
        const polytechImage = require('../assets/img/polytech.jpg');
        return (
            <View style={styles.container}>
                <Image source={polytechImage} style={styles.image}></Image>
                <Text>L'École polytechnique de l'université de Nice est l'une des 207 écoles d'ingénieurs françaises accréditées au 1ᵉʳ septembre 2017 à délivrer un diplôme d'ingénieur. C'est l'école d'ingénieurs de l'Université de Nice - Sophia Antipolis.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#efefef',
        margin: 10
    },
    image: {
        width: '100%',
        height: 200
    }
});