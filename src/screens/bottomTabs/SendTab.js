import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Icon } from 'native-base'

export default class SendTab extends Component {
    static navigationOptions = {
        tabBarIcon: <Icon name="paper-plane" style={{ color: 'rgba(255,255,255,0.5)' }} />
    }
    render() {
        const { navigation } = this.props;
        return (
            <View>
                <Text>Send Tab yoo ...  home tab</Text>

            </View>
        )
    }
}