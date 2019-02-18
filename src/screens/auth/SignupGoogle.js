import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Form, Item, Label, Input, Button, Text } from 'native-base';


import Top from './../../components/auth/Top';
import Bottom from './../../components/auth/Bottom';
import Overlay from './../../components/auth/Overlay';

import { colors } from './../../constants/styles';

const googleIcon = require('./../../../assets/googleIcon.png');

export default class SignupGoogle extends Component {
    static navigationOptions = {
        header: null,
    }

    render() {
        //top,bottom,overlay
        return (
            <View style={{ flex: 1 }}  >
                <Top leftText="SIGN UP" />
                <Overlay>
                    <Form>
                        <Item floatingLabel style={styles.item}>
                            <Label>Email Address</Label>
                            <Input />
                        </Item>
                        <Text style={{ textAlign: 'center', marginVertical: 10, fontSize: 13 }}>or sign up with</Text>
                        <Item regular style={styles.item}>
                            <Label><Image source={googleIcon} style={{ width: 20, height: 20 }} /> Google</Label>
                            <Input />
                        </Item>
                    </Form>
                </Overlay>
                <Bottom>
                    <View>
                        <Button success block style={{ margin: 20 }}
                            onPress={this.onPress} >
                            <Text style={{ textAlign: "center" }}>CONTINUE</Text>
                        </Button>
                        <View style={{ marginHorizontal: 20, paddingBottom: 50 }}>
                            <Text style={{ color: colors.darkText }}>Already have an account?
                        <Text style={{ textDecorationLine: 'underline' }}> Sign in</Text>
                            </Text>
                        </View>
                    </View>

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
    item: {
        marginLeft: 20,
        marginRight: 20,
        paddingHorizontal: 10,
    }

});