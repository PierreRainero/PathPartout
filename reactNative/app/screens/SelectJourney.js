import {Component} from "react";
import {Text, View, Button, Icon, Card, CardItem, Body} from "native-base";
import React from "react";
import {StyleSheet, Alert, ScrollView} from "react-native";


export default class SelectJourney extends Component<Props> {

    state={
        permGranted: false,
        gpsEnabled: false
    }

    async componentDidMount(){

    }

    render() {
        return (
            <ScrollView>
                <View>
                    <Card>
                        <Button onPress={() => this.props.onItemPressed(1)}>
                            <CardItem>
                                <Body style={styles.textContainer}>
                                    <View style={styles.leftCol}>
                                        <Text>Randonnée St Phillipe</Text>
                                    </View>
                                    <View style={styles.rightCol}>
                                        <Text>à 0.1km</Text>
                                    </View>
                                </Body>
                            </CardItem>
                        </Button>
                    </Card>
                    <Card>
                        <Button onPress={() => this.props.onItemPressed(2)}>
                            <CardItem>
                                <Body style={styles.textContainer}>
                                <View style={styles.leftCol}>
                                    <Text>Randonnée forêt</Text>
                                </View>
                                <View style={styles.rightCol}>
                                    <Text>à 2km</Text>
                                </View>
                                </Body>
                            </CardItem>
                        </Button>
                    </Card>
                    <Card>
                        <Button onPress={() => this.props.onItemPressed()}>
                            <CardItem>
                                <Body style={styles.textContainer}>
                                <View style={styles.leftCol}>
                                    <Text>Randonnée plage</Text>
                                </View>
                                <View style={styles.rightCol}>
                                    <Text>à 12km</Text>
                                </View>
                                </Body>
                            </CardItem>
                        </Button>
                    </Card>
                    <Card>
                        <Button onPress={() => this.props.onItemPressed()}>
                            <CardItem>
                                <Body style={styles.textContainer}>
                                <View style={styles.leftCol}>
                                    <Text>Randonnée montagne</Text>
                                </View>
                                <View style={styles.rightCol}>
                                    <Text>à 50km</Text>
                                </View>
                                </Body>
                            </CardItem>
                        </Button>
                    </Card>
                    <Card>
                        <Button onPress={() => this.props.onItemPressed()}>
                            <CardItem>
                                <Body style={styles.textContainer}>
                                <View style={styles.leftCol}>
                                    <Text>Randonnée loin</Text>
                                </View>
                                <View style={styles.rightCol}>
                                    <Text>à 100km</Text>
                                </View>
                                </Body>
                            </CardItem>
                        </Button>
                    </Card>
                    <Card>
                        <Button onPress={() => this.props.onItemPressed()}>
                            <CardItem>
                                <Body style={styles.textContainer}>
                                <View style={styles.leftCol}>
                                    <Text>Randonnée très loin</Text>
                                </View>
                                <View style={styles.rightCol}>
                                    <Text>à 200km</Text>
                                </View>
                                </Body>
                            </CardItem>
                        </Button>
                    </Card>
                    <Card>
                        <Button onPress={() => this.props.onItemPressed()}>
                            <CardItem>
                                <Body style={styles.textContainer}>
                                <View style={styles.leftCol}>
                                    <Text>Randonnée très très loin</Text>
                                </View>
                                <View style={styles.rightCol}>
                                    <Text>à 500km</Text>
                                </View>
                                </Body>
                            </CardItem>
                        </Button>
                    </Card>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#efefef'
    },
    textContainer:{
        flexDirection: 'row',
    },
    rightCol: {
        flex: 1,
        alignItems: 'flex-end',
    },
    leftCol: {
        flex: 1,
        alignItems:'flex-start',
    }
});