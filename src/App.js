import React, { Component } from "react";
import { Platform, Text, View } from "react-native";
import ClothesSwipeScreen from "./screens/ClothesSwipeScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import api from "./Api";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            selectedAgeNSex: false
        };
    }

    onLogin = (val) => {
        this.setState({loggedIn: val});
    }

    onSelectAgeAndSex = (val) => {
        this.setState({selectedAgeNSex: val});
    }

    render() {
        if (!this.state.loggedIn) {
            return (
                <LoginScreen onLogin={this.onLogin} />
            );
        }

        if (!this.state.selectedAgeNSex) {
            return (
                <HomeScreen onSelectAgeAndSex={this.onSelectAgeAndSex} />
            );
        }

        return (
            <ClothesSwipeScreen />
        );
    }
}
