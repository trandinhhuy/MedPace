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
const More = ({ navigation }) => {
    var theme = ['Light', 'Dark']

    const [checkedTheme, setchecked] = useState(1)
    const [isOverwork, setOverwork] = useState(false);
    const toggleOverwork = () => setOverwork(previousState => !previousState);
    const [isBatterySave, setBatterySave] = useState(false);
    const toggleBatterySave = () => setBatterySave(previousState => !previousState);
    return (

        <View style={{ flexDirection: 'column' }}>
            <View style={{ backgroundColor: Color.Dark1, height: 50, width: deviceWidth, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: Color.White1, fontSize: 20, lineHeight: 24, fontWeight: '600' }}>
                    More
                </Text>
            </View>
            <View style={{ height: 1, backgroundColor: '#242424', width: deviceWidth }}></View>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Settings</Text>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Profile')
                    }}>
                        <View style={styles.container2}>
                            <Text style={styles.name}>Profile</Text>
                            <Image style={styles.arrow}
                                source={assets.arrow} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('MeasuringUnit')
                    }}>
                        <View style={styles.container2}>
                            <Text style={styles.name}>Measuring Unit</Text>
                            <Image style={styles.arrow}
                                source={assets.arrow} />
                        </View>
                    </TouchableOpacity>

                    <View style={styles.container2}>
                        <Text style={styles.name}>Overwork Warning</Text>
                        <TouchableOpacity onPress={toggleOverwork} style={styles.arrow}>
                            <Image
                                source={isOverwork ? assets.switch_on : assets.switch_off} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container2}>
                        <Text style={styles.name}>Battery Save</Text>
                        <TouchableOpacity onPress={toggleBatterySave} style={styles.arrow}>
                            <Image
                                source={isBatterySave ? assets.switch_on : assets.switch_off} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Notification')
                    }}>
                        <View style={styles.container2}>
                            <Text style={styles.name}>Notification</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.detail}>On</Text>
                                <Image style={styles.arrow}
                                    source={assets.arrow} />
                            </View>

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Language')
                    }}>
                        <View style={styles.container2}>
                            <Text style={styles.name}>Language</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.detail}>English</Text>
                                <Image style={styles.arrow}
                                    source={assets.arrow} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.container2}>
                        <Text style={styles.name}>Theme</Text>
                        <View style={{ alignSelf: 'center', flexDirection: 'row'}}>
                            {
                                theme.map((data, key) => {
                                    return (
                                        <View key={key}>
                                            {checkedTheme == key ?
                                                <View style={{ flexDirection: 'row', marginLeft:20}}>
                                                    <TouchableOpacity style={{ marginRight: 10 }}>
                                                        <Image source={assets.check_circle} />
                                                    </TouchableOpacity>
                                                    <Text style={styles.detail}>{data}</Text>

                                                </View>
                                                :
                                                <View style={{ flexDirection: 'row', marginLeft: 20}}>
                                                    <TouchableOpacity onPress={() => { setchecked(key) }} style={{ marginRight: 10 }}>
                                                        <Image source={assets.uncheck_circle} />
                                                    </TouchableOpacity>
                                                    <Text style={styles.detail}>{data}</Text>

                                                </View>
                                            }
                                        </View>
                                    )
                                })}
                        </View>


                    </View>

                    <Text style={styles.title}>Data and Sync</Text>
                    <TouchableOpacity>
                        <View style={styles.container2}>
                            <Text style={styles.name}>Devices</Text>
                            <Image style={styles.arrow}
                                source={assets.arrow} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.container2}>
                            <Text style={styles.name}>Apps</Text>
                            <Image style={styles.arrow}
                                source={assets.arrow} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.container2}>
                            <Text style={styles.name}>Export Data</Text>
                        </View>
                    </TouchableOpacity>

                    <Text style={styles.title}>Community</Text>
                    <TouchableOpacity>
                        <View style={styles.container2}>
                            <Image style={styles.topIcon}
                                source={assets.help} />
                            <Text style={styles.name}>Help Centre</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.container2}>
                            <Image style={styles.topIcon}
                                source={assets.star} />
                            <Text style={styles.name}>Rate App</Text>

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.container2}>
                            <Image style={styles.topIcon}
                                source={assets.facebook} />
                            <Text style={styles.name}>Facebook</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.container2}>
                            <Image style={styles.topIcon}
                                source={assets.twitter} />
                            <Text style={styles.name}>Twitter</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={{ height: 100 }}></View>

                </View>
            </ScrollView>
        </View>



    )


}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#141414',
        width: deviceWidth,
        flexDirection: 'column'
    },
    title: {
        color: '#05DB0E',
        fontSize: 20,
        lineHeight: 24,
        fontWeight: '600',
        marginLeft: 16,
        marginTop: 50,
        marginBottom: 20,

    },
    container2: {
        width: deviceWidth,
        backgroundColor: '#242424',
        flexDirection: 'row',
        display: 'flex',
        marginBottom: 2,
        paddingVertical:18,
        paddingHorizontal: 16
    },
    name: {
        color: '#D8D8DF',
        fontSize: 16,
        lineHeight: 20,
        fontWeight: '400',
        flex: 1
    },
    arrow:{
        alignSelf:'center',
        marginLeft:20
    },
    
    topIcon: {
        marginRight: 20,
    },
    detail: {
        fontSize: 16,
        fontWeight: '400',
        color: '#A1A1A1',
        alignSelf: 'center'
    }
})






export default More