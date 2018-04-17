import React, { Component } from 'react';
import { Platform, Text, View } from 'react-native';
import { TabNavigator, StackNavigator, SwitchNavigator } from 'react-navigation';

import AuthLoadingScreen from './screens/AuthLoadingScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import SignupParametersScreen from './screens/SignupParametersScreen';

import ClothesSwipeScreen from './screens/ClothesSwipeScreen';
import VouchersScreen from './screens/VouchersScreen';

import api from './Api';


// TODO: add a settings screen
const AppTab = TabNavigator(
    {
        Swipe: ClothesSwipeScreen,
        Vouchers: VouchersScreen,
    },
    {
        swipeEnabled: false,
        tabBarPosition: 'bottom',
        lazy: false,
        tabBarOptions: {
            renderIndicator: () => null, // disable the tab indicator on android
            upperCaseLabel: false,
            style: {
                backgroundColor: "white",
            },
            activeTintColor: "black",
            inactiveTintColor: "#444",
        }
    }
);
// TODO: add a sign-up screen
const AuthTab = StackNavigator(
    {
        Login: LoginScreen,
        Signup: SignupScreen,
        Signup2 : SignupParametersScreen, 
    },
    {
        headerMode: 'none', // we don't want a blank header
    });

export default SwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppTab,
        Auth: AuthTab,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);