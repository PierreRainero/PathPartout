import {Component} from "react";
import {Text, View, Button, Icon} from "native-base";
import React from "react";
import {StyleSheet, Alert} from "react-native";
import Permissions from "react-native-permissions";
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';


export default class Home extends Component<Props> {

    state={
        permGranted: false,
        gpsEnabled: false
    }
    givePermissions = this.givePermissions.bind(this);
    enableGPS = this.enableGPS.bind(this);

    async componentDidMount(){
        await Permissions.check('location').then(authorized => {
            if (authorized === 'denied')
                this.setState({permGranted: false});
            else
                this.setState({permGranted: true});
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Path'Partout a besoin de votre position pour fonctionner</Text>
                <Text style={styles.instructions}>Afin de vous assurer une experience riche tout au long de son utilisation, autorisez Path'Partout à acceder à votre position et activez votre GPS</Text>
                <View style={styles.permButtonView}>
                    { this.state.permGranted === false ?
                        <Button onPress={this.givePermissions} style={styles.permButton}>
                            <Text>Autoriser Path'Partout à acceder à votre position</Text>
                        </Button> :
                        <Button iconLeft disabled style={styles.permButton}>
                            <View style={styles.permButtonIcon}>
                                <Icon name='md-checkmark' style={{color: "#009b00"}}/>
                            </View>
                            <View style={styles.permButtonText}>
                                <Text>Autoriser Path'Partout à acceder à votre position</Text>
                            </View>
                        </Button>
                    }
                </View>
                <View style={styles.permButtonView}>
                    { this.state.gpsEnabled === false ?
                        <Button onPress={this.connect} style={styles.permButton}>
                            <Text>Activer votre GPS</Text>
                        </Button> :
                        <Button iconLeft onPress={this.enableGPS} disabled style={{color: "#009b00"}}>
                            <View style={styles.permButtonIcon}>
                                <Icon name='md-checkmark' color={'#009b00'}/>
                            </View>
                            <View style={styles.permButtonText}>
                                <Text>Activer votre GPS</Text>
                            </View>
                        </Button>
                    }
                </View>
            </View>
        );
    }

    async givePermissions(){
        return await Permissions.request('location').then(response => {
            if (response != 'authorized')
                this.setState({permGranted: false});
            else
                this.setState({permGranted: true});
        });
    }

    enableGPS(){
        RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({interval: 10000, fastInterval: 5000})
            .then(data => {
                this.setState({currentPage: 'map'});
            }).catch(err => {
            this.setState({currentPage: 'permissions'});
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#efefef'
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
    permButtonView: {
        padding: 15,
        justifyContent: 'center',
        width: '100%'
    },
    permButton: {
        width: '100%',
        justifyContent: 'center'
    },
    permButtonIcon: {
        width: '20%',
        alignItems: 'center',
    },
    permButtonText: {
        width: '80%',
        alignItems: 'center'
    }
});