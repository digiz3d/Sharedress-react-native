import React, { Component } from 'react';
import { Button, TextInput, TouchableHighlight, ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CustomStatusBar from '../components/CustomStatusBar';
import BottomMenuComponent from "../components/BottomMenuComponent";

import api from "../Api";

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { login: "", password: "", loading: false };
    }

    gotoSignup = () => {
        this.props.navigation.navigate("Signup");
    }

    login = () => {
        this.setState({ loading: true });

        api.login(this.state.login, this.state.password).
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
                    <Text style={styles.title}>Prototype login</Text>
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
                            onChangeText={(txt) => { this.setState({ password: txt }) }}
                            style={styles.textInput}
                            underlineColorAndroid="transparent"
                            secureTextEntry
                        />
                        <View style={styles.loginButton}>
                            <Button
                                onPress={this.login}
                                title={this.state.loading ? "Loggin you in..." : "Log in"}
                            />
                        </View>
                        <View style={styles.fbSeparator}>
                            <View style={styles.fbSeparatorLine} />
                            <Text style={styles.fbSeparatorOR}>or</Text>
                            <View style={styles.fbSeparatorLine} />
                        </View>
                    </View>
                </View>
                <View style={styles.bottomMenu}>
                    <BottomMenuComponent
                        onPress={this.gotoSignup}
                        question="Don't have an account ?"
                        answer="Sign up."
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
    title: {
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
    form: {
        width: "100%",
    },
    textInput: {
        backgroundColor: "white",
        width: "100%",
        borderWidth: 0,
        borderRadius: 5,
        borderColor: "silver",
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        height: 40,
    },
    loginButton: {
        height: 40,
        marginBottom: 10,
    },
    fbSeparator: {
        //backgroundColor: "red",
        flexDirection: "row",
        justifyContent:"center",
        alignItems: "center",
        marginBottom: 10,
    },
    fbSeparatorOR: {
        //backgroundColor: "blue",
        paddingHorizontal: 10,
        color: "#999",
    },
    fbSeparatorLine: {
        //backgroundColor: "transparent",
        borderBottomWidth: 0.5,
        borderColor: "#999",
        flexGrow: 1,
        height: 5,
    },
});