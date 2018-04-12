import React from 'react';
import { Platform, StatusBar, View} from 'react-native';

const CustomStatusBar = (props) => {
    return  (
            <StatusBar
                backgroundColor={props.color ? props.color : "#efefef"}
                barStyle="dark-content"
            />
    );
};

export default CustomStatusBar;