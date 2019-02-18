import React, { Component } from 'react';
import { View } from 'react-native';
import { colors } from '../../constants/styles';

export default class Bottom extends Component {
    render() {
        //top,bottom,overlay
        return (
            <View style={{ flex: 6, justifyContent: 'flex-end' }} >
                {this.props.children}
            </View>
        );
    }
}