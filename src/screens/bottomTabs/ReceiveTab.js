import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Icon } from 'native-base'

export default class ReceiveTab extends Component {

    static navigationOptions = {
        //tabBarIcon: <Icon name="receive" style={{ color: '#fff' }} />
        tabBarIcon: <Image source={require('./../../../assets/return.png')} />
    }

    render() {
        const { navigation } = this.props;
        return (
            <View>
                <Text>Receive tab le le yi o ...  receive tab</Text>

            </View>
        )
    }
}