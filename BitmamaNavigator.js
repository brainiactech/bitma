import React from "react";
import { View, Text } from "react-native";
import {
    createStackNavigator, createBottomTabNavigator, createDrawerNavigator,
    createAppContainer
} from "react-navigation";

import { Icon } from 'native-base';

import Onboard from './src/screens/onboarding/Onboarding';
import Splash from './src/screens/Splash';
import SignupGoogle from './src/screens/auth/SignupGoogle';
import SignupTouchId from './src/screens/auth/SignupTouchId';
import SignupFaceId from './src/screens/auth/SignupFaceId';

import Home from './src/screens/main/Home';

import HomeTab from './src/screens/bottomTabs/HomeTab';
import SendTab from './src/screens/bottomTabs/SendTab';
import WalletTab from './src/screens/bottomTabs/WalletTab';
import ReceiveTab from './src/screens/bottomTabs/ReceiveTab';

import { colors } from './src/constants/styles'

const HomeTabStack = createStackNavigator({
    Home: {
        screen: HomeTab
    }
}, {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (<Icon ios='ios-menu' android="md-menu"
                    style={{ fontSize: 20, color: 'white', padding: 10 }}
                    onPress={() => navigation.openDrawer()} />),
                headerRight: <Icon type="FontAwesome" name="bell" style={{ color: 'white', fontSize: 22, padding: 10 }} />,
                headerStyle: {
                    backgroundColor: colors.primary,
                }


            }
        },
        navigationOptions: {
            tabBarIcon: <Icon name="home" style={{ color: 'rgba(255,255,255,0.5)' }} />,
            headerStyle: {
                backgroundColor: colors.primary,
            }
        }
    })

const TabNavigator = createBottomTabNavigator({
    Home: HomeTabStack,
    Send: SendTab,
    Wallet: WalletTab,
    Receive: ReceiveTab,
}, {
        tabBarOptions: {
            activeTintColor: '#fff',
            inactiveTintColor: 'rgba(255,255,255,0.5)',
            //inactiveBackgroundColor: 'rgba(3,4,56,0.5)',
            labelStyle: {
                fontSize: 12,
            },
            style: {
                backgroundColor: colors.primary,
                paddingTop: 10,

            },
        }
    });

const DrawerNavigator = createDrawerNavigator({
    Home: TabNavigator,
}, {
        //drawerBackgroundColor: colors.primary
    })




const AppNavigator = createStackNavigator({
    Onboard: {
        screen: Onboard
    },
    Splash: {
        screen: Splash
    },
    SignupGoogle: {
        screen: SignupGoogle
    },
    SignupTouchId: {
        screen: SignupTouchId
    },
    SignupFaceId: {
        screen: SignupFaceId
    },
    Home: {
        screen: DrawerNavigator,
    }

},
    {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            header: null
        }
    });
export default AppNavigator;