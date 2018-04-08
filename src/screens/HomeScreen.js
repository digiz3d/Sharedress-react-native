import React, { Component } from "react";
import { Button, Picker, Text, StyleSheet, View } from "react-native";
import api from "../Api";

const MIN_AGE = 13;
const MAX_AGE = 120;

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sex: "female",
            age: 24
        };
    }

    submit = () => {
        api.setAge(this.state.age);
        api.setSex(this.state.sex);

        if (api.isSexOk() && api.isAgeOk()) {
            this.props.onSelectAgeAndSex(true);
        }
        else {
            this.props.onSelectAgeAndSex(false);
        }
    }
    renderAgePicker() {
        let pickers = [];
        for (let i = MIN_AGE; i < MAX_AGE; i++) {
            pickers.push(<Picker.Item label={i.toString()} value={i.toString()} />);
        }

        return (
            <Picker
                mode="dropdown"
                selectedValue={this.state.age.toString()}
                onValueChange={
                    (itemValue, itemIndex) => {
                        this.setState({ age: parseInt(itemValue) })
                    }} >
                {pickers}
            </Picker>
        )
    }

    renderSexPicker() {
        return (
            <Picker
                mode="dropdown"
                selectedValue={this.state.sex}
                onValueChange={(itemValue, itemIndex) => this.setState({ sex: itemValue })}
            >
                <Picker.Item label="Female" value="female" />
                <Picker.Item label="Male" value="male" />
            </Picker>
        );
    }
    
    render() {
        return (
            <View style={styles.frame}>
                <View style={styles.panel}>
                    <Text style={styles.title}>Prototype</Text>
                    {this.renderSexPicker()}
                    {this.renderAgePicker()}
                    <Button
                        onPress={this.submit}
                        title="Submit"
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