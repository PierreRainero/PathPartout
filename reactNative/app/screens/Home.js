import {Component} from "react";
import {Text, View, Icon, Body, Card, CardItem} from "native-base";
import React from "react";
import {Platform, StyleSheet, ImageBackground, ScrollView} from "react-native";


export default class Home extends Component<Props> {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <ImageBackground source={require('../assets/img/homeBackground.jpg')} style={styles.imageBackground}>
                        <Text>                                                                                       </Text>
                    </ImageBackground>
                    <View style={styles.content}>
                        <Text style={styles.welcome}>Bienvenue sur Path'Partout!</Text>
                        <Text style={styles.instructions}>Que vous soyez en vacances ou que vous ayez juste envie de décompresser, laissez vous tenter par Path'Partout. Une application innovante vous permetant de tracer vos randonnées ou vos balades en ville. Partagez vos parcours avec vos amis et découvrez des nombreux lieux connus ou cachés. Créez vous un compte en quelques clics et commencez l'aventure gratuitement !</Text>
                        <Card>
                            <CardItem header>
                                <Icon name='map' />
                                <Text>Tracer</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Text>Faites vos trajets facilement et rapidement à l'aide de la carte interractive intégrée à notre site web.</Text>
                                </Body>
                            </CardItem>
                            <CardItem footer>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem header>
                                <Icon name='md-walk' />
                                <Text>Promener</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Text>Explorer des points d'intérêts autour de vous, changez vous les idées avec de longues randonnées.</Text>
                                </Body>
                            </CardItem>
                            <CardItem footer>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem header>
                                <Icon name='share' />
                                <Text>Partager</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Text>Echangez vos trajets et vos découvertes avec vos amis ou avec le reste de la communauté.</Text>
                                </Body>
                            </CardItem>
                            <CardItem footer>
                            </CardItem>
                        </Card>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#efefef',
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
    imageBackground: {
        height: 150,
        padding: 20
    },
    content: {
        padding: 10
    }
});