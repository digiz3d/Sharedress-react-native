import React, { Component } from "react";
import { Button, TextInput, TouchableHighlight, ActivityIndicator, Platform, StyleSheet, Text, View } from "react-native";
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
            <View style={styles.fullPage}>
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
            </View>
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