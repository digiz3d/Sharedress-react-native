import React, { Component } from "react";
import { ActivityIndicator, StatusBar, StyleSheet, View } from "react-native";

export default class AuthLoadingScreen extends Component {
    componentDidMount() {
        // TODO: implement a real token verification and redirect to App if it is valid
        this.props.navigation.navigate("Auth");
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
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