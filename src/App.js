import React, { Component } from 'react';
import { Platform, Text, View } from 'react-native';
import { TabNavigator, StackNavigator, SwitchNavigator } from 'react-navigation';

import AuthLoadingScreen from "./screens/AuthLoadingScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";

//import HomeScreen from "./screens/HomeScreen";

import ClothesSwipeScreen from "./screens/ClothesSwipeScreen";
import CouponsScreen from "./screens/CouponsScreen";

import api from "./Api";

// TODO: add a settings screen
const AppTab = TabNavigator(
    {
        Swipe: ClothesSwipeScreen,
        Coupons: CouponsScreen,
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