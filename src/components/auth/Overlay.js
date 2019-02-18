import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';

import { colors } from './../../constants/styles';

const winHeight = Dimensions.get("window").height;
const winWidth = Dimensions.get("window").width;

export default class Overlay extends Component {
    render() {
        //top,bottom,overlay windowHeight/2 - boxHeight/2
        return (
            <View style={styles.container}  >
                {this.props.children}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: 'white',

        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ddd',
        shadowOffset: { width: 0, height: 4 },
        shadowColor: '#ded',
        shadowOpacity: 0.8,
        shadowRadius: 10,


        position: 'absolute',
        top: (winHeight / 2 - 120),
        left: (winWidth / 2 - 160),
        width: 320,
        paddingBottom: 35,
        minHeight: 180,
        //height: 200,
        color: colors.darkText,

    },
})