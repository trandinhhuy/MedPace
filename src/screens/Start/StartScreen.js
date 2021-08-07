import React from 'react'
import { View, Text } from 'react-native'

const StartScreen = ({navigation}) => {
    return (
        <View style= {{
            flex: 1, 
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>Start Screen</Text>
        </View>
    )
}

export default StartScreen