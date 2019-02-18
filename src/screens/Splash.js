import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const splashImg = require('../../assets/bitmama-logo2.png')



export default class SplashScreen extends Component {
    static navigationOptions = {
        header: null,
    }
    componentDidMount() {
        this.timeout = setTimeout(() => {
            this.props.navigation.navigate('Onboard')

        }, 3000)
    }
    componentWillUnmount() {
        clearTimeout(this.timeout);
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={splashImg} />

            </View>
        );
    }
}