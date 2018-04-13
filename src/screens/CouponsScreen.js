import React, { Component } from 'react';
import { ActivityIndicator, Button, FlatList, Picker, Text, StyleSheet, View } from 'react-native';

import CustomSafeAreaView from '../components/CustomSafeAreaView';
import CustomStatusBar from '../components/CustomStatusBar';
import TopMenuComponent from "../components/TopMenuComponent";
import BottomMenuComponent from "../components/BottomMenuComponent";
import CouponComponent from "../components/CouponComponent";
import api from "../Api";

export default class CouponsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            coupons: []
        };
    }

    componentDidMount() {
        api.getMyCoupons().then((val) => {
            this.setState({ coupons: val, loaded: true });
        })
    }

    renderCouponComponents() {
        return (
            <FlatList 
                style={{flex: 1}}
                data={this.state.coupons}
                renderItem={({item}) => <CouponComponent
                    id={item.id}
                    name={item.name}
                    value={item.value}
                    logo={item.logo}
                />}
                keyExtractor={(item, index) => index.toString()}
            />
        );
    }

    render() {
        if (!this.state.loaded) {
            return (
                <CustomSafeAreaView backgroundColor="#efefef">
                    <CustomStatusBar />
                    <ActivityIndicator size="large" color="#000" />
                </CustomSafeAreaView>
            );

        }
        return (
            <CustomSafeAreaView backgroundColor="#efefef">
                <CustomStatusBar />
                <View style={styles.main}>
                    {this.renderCouponComponents()}
                </View>
            </CustomSafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    frame: {
        backgroundColor: "#efefef",
        flex: 1,
    },
    top: {
        //backgroundColor: "red",
        backgroundColor: "#fff",
        shadowColor: "black",
        zIndex: 2,
        elevation: 2,
    },
    main: {
        flexGrow: 1,
        flexDirection: "column",
        zIndex: 1,
        elevation: 1,
    },
    loading: {
        alignItems: "center",
        flexGrow: 1,
        justifyContent: "center",
    },
    finished: {
        alignItems: "center",
        flexGrow: 1,
        justifyContent: "center",
    },
    finishedText: {
        textAlign: "center",
        marginBottom: 20,
    },
    bottom: {
        //backgroundColor: "yellow",
        backgroundColor: "#fff",
        zIndex: 2,
        elevation: 10,
    },
});
