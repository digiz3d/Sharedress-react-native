import React, { Component } from "react";
import { Image, Platform, StyleSheet, Text, View } from "react-native";

export default class BottomMenuComponent extends Component {
    render() {
        return (
            <View style={styles.menu}>
                <View style={styles.subMenu}>
                    <Image style={styles.icon} source={require("../../assets/icons/home.png")} />
                </View>
                <View style={styles.subMenu}>
                    <Image style={styles.icon} source={require("../../assets/icons/person.png")} />
                </View>
                {/* we will enable that later
                <View style={styles.subMenu}>
                    <Image style={styles.icon} source={require("../../assets/icons/cog.png")} />
                </View>
                */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    menu: {
        //backgroundColor: "red",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    subMenu: {
        //backgroundColor: "orange",
        flex:1,
        alignItems: "center",
        //borderRadius: 4,
        //borderWidth: 2,
        //borderColor: "green",
    },
    icon: {
        height: 24,
        width: 24,
        margin: 10,
    },
});

