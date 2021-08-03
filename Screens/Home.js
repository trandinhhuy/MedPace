import * as React from 'react'
import {
    Dimensions,
    StyleSheet 
} from 'react-native'
import {
    View,
    SafeAreaView,
    TouchableOpacity,
    Text,
    Image
} from 'react-native'

import {
    ScrollView,
    Directions,
    FlatList
} from 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

const HomeScreen = ({navigation}) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <TouchableOpacity onPress = {() => {
                    navigation.navigate ('Detail')
                }}>
                    <Text style = {{
                        color: '#FF3010'
                    }}>Home Page</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : '#8262FF',
        width: deviceWidth - 20,
        height: deviceHeight *2,
        margin: 10,
        padding: 10
    },
    container2: {

    }
})
export default HomeScreen