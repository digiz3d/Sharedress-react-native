import React, { Component } from 'react';
import { Button, ActivityIndicator, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CustomStatusBar from '../components/CustomStatusBar';
import ClothCardComponent from "../components/ClothCardComponent";
import SwipeUpComponent from "../components/SwipeUpComponent";
import TopMenuComponent from "../components/TopMenuComponent";
import api from "../Api";

export default class ClothesSwipeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nextItemsLoaded: false,
            set: [],
            finished: false
        };
    }

    componentDidMount() {
        api.getNextSet().then((val) => {
            this.setState({ set: val, nextItemsLoaded: true })
        }).catch((reason) => {
            alert(reason);
        });
    }

    restartApi = () => {
        api.resetQueue();
        this.setState({ finished: false });
        this.swipedUp();
    }

    swipedUp = () => {
        this.setState({
            nextItemsLoaded: false
        });

        api.getNextSet().then((val) => {
            this.setState({ set: val, nextItemsLoaded: true, finished: false })
        }).catch((reason) => {
            this.setState({ finished: true });
        });
    };

    renderSwipeUpComponents() {
        return (
            <View style={styles.main}>
                <SwipeUpComponent
                    swipedUp={this.swipedUp}
                    id={this.state.set[0].id}
                    name={this.state.set[0].name}
                    image={this.state.set[0].image}
                />
                <SwipeUpComponent
                    swipedUp={this.swipedUp}
                    id={this.state.set[1].id}
                    name={this.state.set[1].name}
                    image={this.state.set[1].image}
                />
            </View>
        );
    }

    render() {
        if (this.state.finished) {
            return (
                <SafeAreaView style={styles.frame}>
                    <CustomStatusBar />
                    <View style={styles.top}>
                        <TopMenuComponent />
                    </View>
                    <View style={styles.finished}>
                        <Text style={styles.finishedText}>Fini ! à la prochaine. 😉</Text>
                        <Button
                            title="Recommencer"
                            onPress={this.restartApi}
                        />
                    </View>
                </SafeAreaView>
            );
        }

        if (!this.state.nextItemsLoaded) {
            return (
                <SafeAreaView style={styles.frame}>
                    <CustomStatusBar />
                    <View style={styles.top}>
                        <TopMenuComponent />
                    </View>
                    <View style={styles.loading}>
                        <ActivityIndicator size="large" color="#000" />
                    </View>
                </SafeAreaView>
            );
        }

        return (
            <SafeAreaView style={styles.frame}>
                <CustomStatusBar />
                <View style={styles.top}>
                    <TopMenuComponent />
                </View>
                {this.renderSwipeUpComponents()}
            </SafeAreaView>
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
        flexDirection: "row",
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
});
