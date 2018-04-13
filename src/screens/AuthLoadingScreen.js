import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import CustomSafeAreaView from '../components/CustomSafeAreaView';
import CustomStatusBar from '../components/CustomStatusBar';

export default class AuthLoadingScreen extends Component {
    componentDidMount() {
        // TODO: implement a real token verification and redirect to App if it is valid
        this.props.navigation.navigate("Auth");
    }

    render() {
        return (
            <CustomSafeAreaView>
                <CustomStatusBar />
                <ActivityIndicator />
            </CustomSafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});