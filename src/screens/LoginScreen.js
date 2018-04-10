import React, { Component } from "react";
import { Button, TextInput, ActivityIndicator, Platform, StyleSheet, Text, View } from "react-native";

import ClothCardComponent from "../components/ClothCardComponent";
import SwipeUpComponent from "../components/SwipeUpComponent";
import TopMenuComponent from "../components/TopMenuComponent";
import BottomMenuComponent from "../components/BottomMenuComponent";
import api from "../Api";

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { login: "", password: "", loading: false };
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
        if (this.state.loading) {
            return (
                <View style={styles.frame}>
                    <ActivityIndicator size="large" color="#000" />
                </View>
            );
        }

        return (
            <View style={styles.frame}>
                <View style={styles.panel}>
                    <Text style={styles.title}>Prototype</Text>
                    <TextInput
                        placeholder="Adresse mail"
                        onChangeText={(txt) => { this.setState({ login: txt }) }}
                    />
                    <TextInput
                        placeholder="Mot de passe"
                        onChangeText={(txt) => { this.setState({ password: txt }) }}
                        secureTextEntry={true}
                    />
                    <Button
                        style={styles.button}
                        onPress={this.login}
                        title="Se connecter"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    frame: {
        backgroundColor: "#eee",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    panel: {
        backgroundColor: "#fff",
        width: "80%",
        borderRadius: 10,
        padding: 10,
        elevation: 2,
    },
    title: {
        textAlign: "center",
        fontSize: 24,
    },
});