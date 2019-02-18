import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Top from './../../components/auth/Top';
import Bottom from './../../components/auth/Bottom';
import Overlay from './../../components/auth/Overlay';

import { colors } from './../../constants/styles';

export default class FaceIdSignup extends Component {
    static navigationOptions = {
        header: null,
    }

    render() {
        //top,bottom,overlay
        return (
            <View style={{ flex: 1 }}  >
                <Top />
                <Overlay />
                <Bottom />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    top: {
        flex: 2,
        backgroundColor: colors.primary,
    },
    overlay: {
        flex: 1,
    },
    bottom: {
        flex: 3,
    }
});