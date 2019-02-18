import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

const onboardImg2 = require('../../../../assets/bitmama-splash2.png')



export default class Onboard2 extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={onboardImg2} style={{}} />
            </View>
        );
    }
}