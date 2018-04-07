import React, { Component } from "react";
import { Platform, Text, View } from "react-native";
import ClothesSwipeScreen from "./screens/ClothesSwipeScreen";
import LoginScreen from "./screens/LoginScreen";
import api from "./Api";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {loggedIn: false};
    }

    onLogin = (val) => {
        this.setState({loggedIn: val});
    }

    render() {
        if (!this.state.loggedIn) {
            return (
                <LoginScreen onLogin={this.onLogin} />
            );
        }

        return (
            <ClothesSwipeScreen />
        );
    }
}
