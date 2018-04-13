import React from 'react';
import { Platform, SafeAreaView, View } from 'react-native';

const CustomSafeAreaView = (props) => {
    let backgroundColor = props.backgroundColor ? props.backgroundColor : "white";
    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView style={{
                backgroundColor: backgroundColor,
                flex: 1,
                zIndex: 1,
            }}>
                {props.children}
            </SafeAreaView>
            <SafeAreaView
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    flex: 1,
                    width: "100%",
                    backgroundColor: backgroundColor,
                    zIndex: 2,
                }} />
        </View>
    );
};

export default CustomSafeAreaView;