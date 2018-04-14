import React from 'react';
import { Platform, StatusBar, View } from 'react-native';

const CustomStatusBar = (props) => {
    let android = Platform.OS == "android";
    let color = props.color ? props.color : "transparent";

    if (android) {
        return (
            <View style={{ height: 24 }}>
                <StatusBar
                    translucent
                    backgroundColor={color}
                    barStyle="dark-content"
                />
            </View>
        );
    }
    return (
        <StatusBar
            translucent
            backgroundColor={color}
            barStyle="dark-content"
        />
    );

};

export default CustomStatusBar;