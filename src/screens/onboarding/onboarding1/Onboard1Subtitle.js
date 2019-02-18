import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';


export default class Onboard1Subtitle extends Component {
    render() {
        return (
            <View>
                <Text style={{ textAlign: "center" }}>{'Get real time currency \n conversion rates'}</Text>
                <Text style={{ textAlign: "center", marginTop: 50, color: "#03A438" }}>SWIPE</Text>
            </View>
        );
    }
}