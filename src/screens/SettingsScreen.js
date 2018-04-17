import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import CustomStatusBar from '../components/CustomStatusBar';
import TopMenuComponent from "../components/TopMenuComponent";

export default class SettingsScreen extends Component {
    render () {
        return(
            <View style={styles.fullPage}>
                <CustomStatusBar color="white" />
                <SafeAreaView style={styles.top}>
                    <TopMenuComponent text="Settings"/>
                </SafeAreaView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    fullPage: {
        flex: 1,
        backgroundColor: "#efefef",
    },
    top: {
        //backgroundColor: "red",
        backgroundColor: "#fff",
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        zIndex: 2,
        elevation: 2,
    },
    main: {
        flexGrow: 1,
        flexDirection: "row",
        zIndex: 1,
        elevation: 1,
    },
    loading: {
        alignItems: "center",
        flexGrow: 1,
        justifyContent: "center",
    },
    finished: {
        alignItems: "center",
        flexGrow: 1,
        justifyContent: "center",
    },
    finishedText: {
        textAlign: "center",
        marginBottom: 20,
    },
});
