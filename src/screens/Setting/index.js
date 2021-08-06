import React from 'react';
import { View, Text } from 'react-native';
import { Color } from '../../color';
import Button from '../../components/Button';

const Setting = () => {
    return <View style={{flex:1, backgroundColor: Color.Dark1}}>
         <Text style={{color: Color.White1}}>This is settings</Text>
    </View>
}


export default Setting;