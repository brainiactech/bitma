import React, { Component } from 'react';
import { View, Image } from 'react-native';

const onboardImg1 = require('../../../../assets/bit-splash1.png')

export default class Onboard1 extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 70 }}>
                <Image source={onboardImg1} style={{ width: 300, height: 300 }} />
            </View>
        );
    }
}