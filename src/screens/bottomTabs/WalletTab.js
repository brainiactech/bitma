import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Icon } from 'native-base'

export default class WalletTab extends Component {

    static navigationOptions = {
        //tabBarIcon: <Icon name="wallet" style={{ color: '#fff' }} />
        tabBarIcon: <Image source={require('./../../../assets/wallet.png')} />
    }

    render() {
        const { navigation } = this.props;
        return (
            <View>
                <Text>Wallet Tab baba ...  wallet tab</Text>
            </View>
        )
    }
}