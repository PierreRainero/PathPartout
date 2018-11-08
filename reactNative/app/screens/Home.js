import {Component} from "react";
import {Text, View, Form, Input, Item, Label, Button} from "native-base";
import React from "react";
import {StyleSheet, Alert} from "react-native";


export default class Home extends Component<Props> {

    state={
        username: '',
        password: ''
    }
    connect = this.connect.bind(this);

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Bienvenue sur Path'Partout!</Text>
                <Text style={styles.instructions}>Veuillez vous connecter pour acceder à l'application</Text>
                <Form style={styles.loginForm}>
                    <Item floatingLabel>
                        <Label>Nom d'utilisateur</Label>
                        <Input value={this.state.username} onChangeText={(value) => this.setState({username: value})}/>
                    </Item>
                    <Item floatingLabel>
                        <Label>Mot de passe</Label>
                        <Input secureTextEntry={true} value={this.state.password} onChangeText={(value) => this.setState({password: value})}/>
                    </Item>
                </Form>
                <View style={styles.loginButtonView}>
                    <Button onPress={this.connect}>
                        <Text>Connection</Text>
                    </Button>
                </View>
            </View>
        );
    }

    connect(){
        this.props.callback(this.state.username, this.state.password);
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
    loginForm: {
        width: '100%'
    },
    loginButtonView: {
        padding: 15,
        justifyContent: 'center'
    }
});