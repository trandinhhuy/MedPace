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
const PlantScreen = () => {
    const [secondLeft, setSecondLeft] = React.useState(10);
    const [timerOn, setTimerOn] = React.useState(false)
    const [appearItem, setAppearItem] = React.useState(false);
    useEffect(() => {
        if (timerOn) startTimer()
        else _BackgroundTimer.stopBackgroundTimer()
        
        return () => {
            _BackgroundTimer.stopBackgroundTimer()
        }
    }, [timerOn])

    useEffect(() => {
        if (secondLeft == 0) {
            _BackgroundTimer.stopBackgroundTimer()
            setAppearItem(true)
        } 
        else setAppearItem(false)
    }, [secondLeft])
    const startTimer = () => {
        _BackgroundTimer.runBackgroundTimer(() => {
            setSecondLeft(secs => {
                if (secs > 0) return secs-1
                else return 0
            })
        }, 1000)
    }

    function Appear() {
        if (appearItem){
            return(
                <Text style={styles.textWhite}>time ups</Text>
            )
        }
        else return null
    }
    return (
        <View style = {{
            flex: 1, 
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Color.Dark1
        }}>
            <Text style = {styles.textWhite}>{secondLeft}s</Text>
            <TouchableOpacity onPress = {() => {
                setTimerOn(!timerOn)
            }}>
                <Text style = {styles.textWhite}>Start counting </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => {
                setSecondLeft(secondLeft + 10)
            }}> 
                <Text style = {styles.textWhite}>Tab here to add more 10 sec</Text>
            </TouchableOpacity>
            {Appear()}
        </View>
    )
}

let styles = StyleSheet.create({
    textWhite: {
        color: 'white'
    }
})
export default PlantScreen;