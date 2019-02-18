import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Alert } from 'react-native';
import { Button } from 'native-base'

import { colors } from './../../constants/styles';

const logoWhite = require('./../../../assets/bit-logo-white.png')

export default class Top extends Component {

    render() {
        //top,bottom,overlay
        let { leftText, leftNavigateTo, rightText, rightNavigateTo, rightActive } = this.props;
        let leftStyle = rightActive ? styles.notActive : styles.active;
        let rightStyle = rightActive ? styles.active : styles.notActive;
        leftStyle = rightText ? leftStyle : styles.default;

        let leftView = leftText && (<View>
            <Button transparent style={{ color: colors.light, paddingLeft: 50 }}
                onPress={this.props.leftPressed}>
                <Text style={leftStyle}>{leftText}</Text>
            </Button>
        </View>);

        let rightView = rightText && (<View>
            <Button transparent style={{ color: colors.light, paddingRight: 50 }}
                onPress={this.props.rightPressed}>
                <Text style={rightStyle}>{rightText}</Text>
            </Button>
        </View>);

        return (
            <View style={{ flex: 5, backgroundColor: colors.primary }} >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
                    <Image source={logoWhite} style={{}} />
                </View>

                <View style={{ flex: 1.5, flexDirection: 'row', justifyContent: 'space-between' }}>
                    {leftView}
                    {rightView}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
    },
    active: {
        color: colors.light,
        fontSize: 15,
        textDecorationLine: 'underline'
    },
    default: {
        color: colors.light,
        fontSize: 15,
    },

    notActive: {
        color: colors.faintText,
        fontSize: 15
    }
});