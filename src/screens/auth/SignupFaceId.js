import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, Text } from 'native-base'


import Top from './../../components/auth/Top';
import Bottom from './../../components/auth/Bottom';
import Overlay from './../../components/auth/Overlay';

import { colors } from './../../constants/styles';

const fingerprintImg = require('./../../../assets/fingerprint.png');

export default class SignupFaceId extends Component {
    constructor(props) {
        super(props);
        this.leftPressed = this.leftPressed.bind(this);
        this.rightPressed = this.rightPressed.bind(this);
    }
    static navigationOptions = {
        header: null,
    }
    leftPressed() {
        this.props.navigation.navigate('SignupTouchId');
    }
    rightPressed() {
        this.props.navigation.navigate('SignupFaceId');
    }

    render() {
        //top,bottom,overlay
        return (
            <View style={{ flex: 1 }}  >
                <Top leftText="SET TOUCH ID" rightText="SET FACIAL ID" rightActive={true} leftPressed={this.leftPressed} rightPressed={this.rightPressed} />
                <Overlay>
                    <View style={{ justifyContent: 'center', alignItems: 'center', height: 250 }}>
                    </View>
                </Overlay>
                <Bottom>
                    <View style={{ fontSize: 12 }}>
                        <Text style={styles.centerText}>Please put your phone in front of your face</Text>
                        <Text style={styles.centerText}>Or use traditional PIN</Text>
                    </View>
                    <Button success block style={{ margin: 20 }}
                        onPress={this.onPress} >
                        <Text style={{ textAlign: "center" }}>SCAN TO START</Text>
                    </Button>

                </Bottom>
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
    },
    centerText: {
        textAlign: 'center',
        fontSize: 13.5,
    }
});