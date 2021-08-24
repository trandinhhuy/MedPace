import React from 'react'
import { 
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import { StyleSheet } from 'react-native';
import { useEffect } from 'react';
import {Color} from '../../color';
import _BackgroundTimer from 'react-native-background-timer';
import NewGoalScreen from '../Goal/NewGoalScreen';

const PlanScreen = ({navigation}) => {
    
    return (
        <View style = {{
            flex: 1, 
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Color.Dark1
        }}>

            <TouchableOpacity onPress = {() => {
                navigation.navigate('NewGoal')
            }}>
                <Text style = {styles.textWhite}>Tab here</Text>
            </TouchableOpacity>
        </View>
    )
}

let styles = StyleSheet.create({
    textWhite: {
        color: 'white'
    }
})
export default PlanScreen;