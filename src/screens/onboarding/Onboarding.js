import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import Onboard1 from './onboarding1/Onboard1';
import Onboard1Subtitle from './onboarding1/Onboard1Subtitle';
import Onboard2 from './onboarding2/Onboard2';
import Onboard2Subtitle from './onboarding2/Onboard2Subtitle';
import Onboard3 from './onboarding3/Onboard3';
import Onboard3Subtitle from './onboarding3/Onboard3Subtitle';

export default class Onboard extends Component {
    static navigationOptions = {
        header: null,
    }
    render() {
        const { navigation } = this.props;
        return (
            <Onboarding
                pages={[
                    {
                        backgroundColor: '#fff',
                        image: <Onboard1 />,
                        title: 'Real Time',
                        subtitle: <Onboard1Subtitle />,
                    },
                    {
                        backgroundColor: '#fff',
                        image: <Onboard2 />,
                        title: 'Get Real Time Data',
                        subtitle: <Onboard2Subtitle />,
                    },
                    {
                        backgroundColor: '#fff',
                        image: <Onboard3 />,
                        title: 'Trade In Multiple Currency',
                        subtitle: <Onboard3Subtitle nav={navigation} />,


                    },

                ]}
                imageContainerStyles={{ marginTop: 90 }}
                titleStyles={{ marginTop: 90 }}
                showNext={false}
                bottomBarHighlight={false}
                bottomBarHeight={80}
                showDone={false}
            />);
    }
}