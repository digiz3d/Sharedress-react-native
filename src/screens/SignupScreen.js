import React, { Component } from 'react';
import { Button, TextInput, TouchableHighlight, ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CustomStatusBar from '../components/CustomStatusBar';
import BottomMenuComponent from "../components/BottomMenuComponent";
import api from "../Api";

export default class SignupScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { loading : false };
    }

    goBack = () => {
        this.props.navigation.goBack();
    }

    signup = () => {
        this.setState({ loading: true });

        api.login("test", "test").
            then(() => {
                // TODO: implement a real token creation so we can store it and stay logged in
                this.props.navigation.navigate("App");
            })
            .catch(() => {
                this.setState({ loading: false });
            });
    }

    render() {
        return (
            <SafeAreaView style={styles.fullPage}>
                <CustomStatusBar />
                <View style={styles.registerBackground}>
                    <Text style={styles.title}>Prototype signup</Text>
                    <View style={styles.form}>
                        <TextInput
                            keyboardType="email-address"
                            placeholder="Email Address"
                            onChangeText={(txt) => { this.setState({ login: txt }) }}
                            style={styles.textInput}
                            underlineColorAndroid="transparent"
                        />
                        <TextInput
                            placeholder="Password"
                            onChangeText={(txt) => { this.setState({ login: txt }) }}
                            style={styles.textInput}
                            underlineColorAndroid="transparent"
                            secureTextEntry
                        />
                        <TextInput
                            placeholder="Password confirmation"
                            onChangeText={(txt) => { this.setState({ login: txt }) }}
                            style={styles.textInput}
                            underlineColorAndroid="transparent"
                            secureTextEntry
                        />
                        <Button
                            onPress={this.signup}
                            title={this.state.loading ? "Signing you up..." : "Sign up"}
                        />
                    </View>
                </View>
                <View style={styles.bottomMenu}>
                    <BottomMenuComponent
                        onPress={this.goBack}
                        question="Already have an account ?"
                        answer="Log in."
                    />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    fullPage: {
        flex: 1,
        backgroundColor: "#efefef",
    },
    registerBackground: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        padding: 10,
    },
    title : {
        fontSize: 30,
    },
    bottomMenu: {
        zIndex: 2,
        elevation: 10,
        borderTopWidth: 1,
        borderColor: '#ccc',
        shadowColor: "black",
        shadowOffset: {width: 0, height: -2},
        shadowOpacity: 0.1,
        shadowRadius: 1,
    },
    form : {
        width: "100%",
    },
    textInput: {
        backgroundColor: "white",
        width: "100%",
        borderWidth: 0,
        borderRadius: 10,
        borderColor: "silver",
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        height: 40,
    },
});