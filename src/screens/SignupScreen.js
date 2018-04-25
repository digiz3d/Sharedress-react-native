import React, { Component } from 'react';
import { ActivityIndicator, Button, TextInput, TouchableHighlight, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import CustomStatusBar from '../components/CustomStatusBar';
import BottomMenuComponent from "../components/BottomMenuComponent";
import api from "../Api";
import strings from "../Language";


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
                this.props.navigation.navigate("Signup2");
            })
            .catch(() => {
                this.setState({ loading: false });
            });
    }

    render() {
        return (
            <View style={styles.fullPage}>
                <CustomStatusBar />
                <SafeAreaView style={styles.registerBackground}>
                    <Text style={styles.title}>Prototype signup</Text>
                    <View style={styles.form}>
                        <TextInput
                            placeholder={strings.email}
                            autoCapitalize="none"
                            keyboardType="email-address"
                            onChangeText={(txt) => { this.setState({ login: txt }) }}
                            style={styles.textInput}
                            underlineColorAndroid="transparent"
                        />
                        <TextInput
                            placeholder={strings.password}
                            onChangeText={(txt) => { this.setState({ login: txt }) }}
                            style={styles.textInput}
                            underlineColorAndroid="transparent"
                            secureTextEntry
                        />
                        <TextInput
                            placeholder={strings.confirmation}
                            onChangeText={(txt) => { this.setState({ login: txt }) }}
                            style={styles.textInput}
                            underlineColorAndroid="transparent"
                            secureTextEntry
                        />
                        <Button
                            onPress={this.signup}
                            title={this.state.loading ? strings.signingYouUp : strings.signUp}
                        />
                    </View>
                </SafeAreaView>
                <SafeAreaView style={styles.bottomMenu}>
                    <BottomMenuComponent
                        onPress={this.goBack}
                        question={strings.signUpAlready}
                        answer={strings.login}
                    />
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
    registerBackground: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
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
        backgroundColor: "white",
    },
    form : {
        width: "100%",
        paddingHorizontal: 10,
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
});