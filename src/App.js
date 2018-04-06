import React, { Component } from "react";
import { Platform, Text, View } from "react-native";
import ClothesSwipePage from "./components/ClothesSwipePage";
import LoginPage from "./components/LoginPage";
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
                <LoginPage onLogin={this.onLogin} />
            );
        }

        return (
            <ClothesSwipePage />
        );
    }
}
