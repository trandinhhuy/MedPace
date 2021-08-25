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

        <View style={{ flexDirection: 'column', backgroundColor: Color.Dark1 }}>
            <View style = {{
                width: deviceWidth * 0.915,
                marginHorizontal: deviceWidth * 0.046,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                borderBottomWidth: 1,
                borderBottomColor: 'rgba(5, 219, 14, 0.1)'
            }}>
                <TouchableOpacity onPress = {() => {
                     navigation.goBack()
                }}>
                <View style = {{
                    marginRight: deviceWidth * 0.293333 - 60,
                    padding: 7,
                    //backgroundColor : 'rgba(5, 219, 14, 0.1)',
                    borderRadius: 100,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Image source = {assets.arrow_back} style = {{
                        tintColor: Color.White1,
                        width: 18,
                        height: 18,
                    }}/>
                </View>
                </TouchableOpacity>
                <Text style = {{
                    color: Color.White1,
                    fontSize: 20,
                    fontWeight: 'bold',
                    width: 150,
                    textAlign: 'center',
                }}>Language</Text>
                <TouchableOpacity style = {{
                    opacity: 0
                }}>
                <View style = {{
                    marginLeft: deviceWidth * 0.293333 - 60,
                    padding: 7,
                    backgroundColor : 'rgba(5, 219, 14, 0.1)',
                    borderRadius: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0
                }}>
                    <Image source = {assets.location_icon} style = {{
                        tintColor: Color.Main1,
                        width: 18,
                        height: 18,
                        
                    }}/>
                </View>
                </TouchableOpacity>
            </View>
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