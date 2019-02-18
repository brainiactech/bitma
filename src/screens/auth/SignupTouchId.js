import React, { Component } from 'react';
import { StyleSheet, View, Image, Alert } from 'react-native';
import { Button, Text } from 'native-base'


import Top from './../../components/auth/Top';
import Bottom from './../../components/auth/Bottom';
import Overlay from './../../components/auth/Overlay';

import { colors } from './../../constants/styles';

const fingerprintImg = require('./../../../assets/fingerprint.png');

export default class SignupTouchId extends Component {
    constructor(props) {
        super(props);
        this.leftPressed = this.leftPressed.bind(this);
        this.rightPressed = this.rightPressed.bind(this);
        this.onSignupPressed = this.onSignupPressed.bind(this);
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
    onPress() {
        this.props.navigation.navigate('SignupGoogle');
    }
    onSignupPressed() {
        this.props.navigation.navigate('Home');
    }


    render() {
        //top,bottom,overlay
        return (
            <View style={{ flex: 1 }}  >
                <Top leftText="SET TOUCH ID" rightText="SET FACIAL ID" leftPressed={this.leftPressed} rightPressed={this.rightPressed} />
                <Overlay>
                    <View style={{ flex: 2.5, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={fingerprintImg} style={{ width: 100, height: 100, marginTop: 30 }} />
                    </View>
                    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                        <Text style={{ textAlign: 'center' }}> Repeatedly place your finger on the fingerprint radar and
                            lift it when you feel the vibration. Or use traditional PIN
                        </Text>
                    </View>

                </Overlay>
                <Bottom>
                    <Button success block style={{ margin: 20 }}
                        onPress={this.onSignupPressed} >
                        <Text style={{ textAlign: "center" }}>SIGN UP</Text>
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
    }
});