import * as React from 'react'
import { Dimensions } from 'react-native'
import {
    View,
    SafeAreaView,
    TouchableOpacityComponent,
    Text,
    Image
} from 'react-native'

import {
    ScrollView,
    Directions
} from 'react-native-gesture-handler'


const HomeScreen = (navigation) => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>This is home page</Text>
        </View>
    )
}

export default HomeScreen