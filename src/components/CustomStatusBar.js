import React from 'react';
import { Platform, StatusBar, View} from 'react-native';

const CustomStatusBar = () => {
    return  (
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="light-content"
            />
    );
};

export default CustomStatusBar;