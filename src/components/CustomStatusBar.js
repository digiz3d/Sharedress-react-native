import React from 'react';
import { Platform, StatusBar, View } from 'react-native';

const CustomStatusBar = (props) => {
    let android = Platform.OS === "android";
    let height = android ? 24 : 0;
    let color = props.color ? props.color : "transparent";
    return (
        <View style={{height: height}}>
            <StatusBar
                translucent
                backgroundColor={color}
                barStyle="dark-content"
            />
        </View>
    );
};

export default CustomStatusBar;