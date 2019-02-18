import React, { Component } from 'react';
import { StyleSheet, View, Image, Alert } from 'react-native';
import { Button, Text } from 'native-base'


export default class Onboard3Subtitle extends Component {
    onPress = () => {
        this.props.nav.navigate('SignupTouchId');
    }
    render() {
        return (
            <View  >
                <Text style={{ textAlign: "center" }}>{'11Lorem ipsum , trade in multiple currency \n conversion rates'}</Text>
                <Button success block style={{ marginTop: 100 }}
                    onPress={this.onPress} >
                    <Text style={{ textAlign: "center" }}>GET STARTED</Text>
                </Button>

            </View>
        );
    }
}