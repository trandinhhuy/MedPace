import * as React from 'react'
import { useState } from 'react'
import { Dimensions, Switch } from 'react-native'
import {
    View,
    SafeAreaView,
    TouchableOpacity,
    Text,
    Image,
    StyleSheet,

} from 'react-native'

import {
    ScrollView,
    Directions
} from 'react-native-gesture-handler'
import assets from '../../assets'
import { Color } from '../../color'

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height
const Language = ({ navigation }) => {
    var languageData = ['English', '日本語', 'Tiếng Việt']
    const [checkedLanguage, setcheckedLanguage] = useState(0)
    return (

        <View style={{ flexDirection: 'column' }}>
            {/* <View style={{ backgroundColor: Color.Dark1, height: 50, width: deviceWidth, alignItems: 'center', flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={assets.arrow_back} style={{ width: 15, marginLeft: 24 }}></Image>
                </TouchableOpacity>
                <Text style={{ color: Color.White1, fontSize: 20, lineHeight: 24, fontWeight: '600', textAlign: 'center', flex: 1 }}>
                    Language
                </Text>
                <View style={{ width: 31 }}></View>
            </View> */}
            <View style={{ height: 1, backgroundColor: '#242424', width: deviceWidth }}></View>
            <View style={styles.container}>
                {
                    languageData.map((data, key) => {
                        return (
                            <View key={key}>
                                <View style={{ flexDirection: 'column' }}>
                                    <View style={{ marginVertical: 18 }}>
                                        {checkedLanguage == key ?
                                            <View style={{ flexDirection: 'row' }}>
                                                <TouchableOpacity style={{ marginRight: 20 }}>
                                                    <Image source={assets.check_circle} />
                                                </TouchableOpacity>
                                                <Text style={styles.unit}>{data}</Text>

                                            </View>
                                            :
                                            <View style={{ flexDirection: 'row' }}>
                                                <TouchableOpacity onPress={() => { setcheckedLanguage(key) }} style={{ marginRight: 20 }}>
                                                    <Image source={assets.uncheck_circle} />
                                                </TouchableOpacity>
                                                <Text style={styles.unit}>{data}</Text>

                                            </View>
                                        }
                                    </View>
                                    {key != languageData.length - 1 ? <View style={styles.divide}></View> : null}

                                </View>
                            </View>
                        )
                    })}

            </View>
        </View>

    )


}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.Dark1,
        width: deviceWidth,
        height: deviceHeight,
        flexDirection: 'column',
        paddingHorizontal: 16,
        paddingTop: 30
    },
    unit: {
        color: Color.White1,
        lineHeight: 20,
        fontSize: 16,
        fontWeight: '400',
    },
    divide: {
        height: 1,
        backgroundColor: '#242424',
        width: deviceWidth - 32
    }

})






export default Language