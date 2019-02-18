import React, { Component } from 'react';
import { View, Image } from 'react-native';

const onboardImg3 = require('../../../../assets/bitmama-splash3.png')
export default class Onboard3 extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={onboardImg3} style={{}} />
            </View>
        );
    }
}