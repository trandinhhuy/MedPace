import React from 'react';
import { View } from 'react-native';
import { Color } from '../../color';
import Button from '../../components/Button';

const Question = ({ navigation }) => {
    return <View style={{flex:1, backgroundColor: Color.Dark1}}>
        <Button onPress={() => navigation.navigate('Home') } >Test</Button>
    </View>
}


export default Question;