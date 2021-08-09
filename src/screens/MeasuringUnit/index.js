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
const MeasuringUnit = ({ navigation }) => {
    var weightData = ['kg', 'lbs']
    var heightData = ['cm', 'ft in']
    var distanceData = ['km', 'mi']
    const [checkedWeight, setcheckedWeight] = useState(0)
    const [checkedHeight, setcheckedHeight] = useState(0)
    const [checkedDistance, setcheckedDistance] = useState(0)
    return (

        <View style={{ flexDirection: 'column'}}>
            <View style={{ backgroundColor: Color.Dark1, height: 50, width: deviceWidth, alignItems: 'center', flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={assets.arrow_back} style={{ width: 15, marginLeft: 24 }}></Image>
                </TouchableOpacity>
                <Text style={{ color: Color.White1, fontSize: 20, lineHeight: 24, fontWeight: '600', textAlign: 'center', flex: 1 }}>
                    Measuring Unit
                </Text>
                <View style={{ width: 31 }}></View>
            </View>
            <View style={{ height: 1, backgroundColor: '#242424', width: deviceWidth }}></View>
            <View style={styles.container}>
                <View style={styles.container2}>
                    <Text style={styles.title}>
                        Weight
                    </Text>
                    {
                        weightData.map((data, key) => {
                            return (
                                <View key={key}>
                                    {checkedWeight == key ?
                                        <View style={{ flexDirection: 'row', marginRight: 50, width: 50 }}>
                                            <TouchableOpacity style={{ marginRight: 10 }}>
                                                <Image source={assets.check_circle} />
                                            </TouchableOpacity>
                                            <Text style={styles.unit}>{data}</Text>

                                        </View>
                                        :
                                        <View style={{ flexDirection: 'row', marginRight: 50, width: 50 }}>
                                            <TouchableOpacity onPress={() => { setcheckedWeight(key) }} style={{ marginRight: 10 }}>
                                                <Image source={assets.uncheck_circle} />
                                            </TouchableOpacity>
                                            <Text style={styles.unit}>{data}</Text>

                                        </View>
                                    }
                                </View>
                            )
                        })}
                </View>
                <View style={styles.divide}></View>
                <View style={styles.container2}>
                    <Text style={styles.title}>
                        Height
                    </Text>
                    {
                        heightData.map((data, key) => {
                            return (
                                <View key={key}>
                                    {checkedHeight == key ?
                                        <View style={{ flexDirection: 'row', marginRight: 50, width: 50 }}>
                                            <TouchableOpacity style={{ marginRight: 10 }}>
                                                <Image source={assets.check_circle} />
                                            </TouchableOpacity>
                                            <Text style={styles.unit}>{data}</Text>

                                        </View>
                                        :
                                        <View style={{ flexDirection: 'row', marginRight: 50, width: 50 }}>
                                            <TouchableOpacity onPress={() => { setcheckedHeight(key) }} style={{ marginRight: 10 }}>
                                                <Image source={assets.uncheck_circle} />
                                            </TouchableOpacity>
                                            <Text style={styles.unit}>{data}</Text>

                                        </View>
                                    }
                                </View>
                            )
                        })}
                </View>
                <View style={styles.divide}></View>
                <View style={styles.container2}>
                    <Text style={styles.title}>
                        Distance
                    </Text>
                    {
                        distanceData.map((data, key) => {
                            return (
                                <View key={key}>
                                    {checkedDistance == key ?
                                        <View style={{ flexDirection: 'row', marginRight: 50, width: 50 }}>
                                            <TouchableOpacity style={{ marginRight: 10 }}>
                                                <Image source={assets.check_circle} />
                                            </TouchableOpacity>
                                            <Text style={styles.unit}>{data}</Text>

                                        </View>
                                        :
                                        <View style={{ flexDirection: 'row', marginRight: 50, width: 50 }}>
                                            <TouchableOpacity onPress={() => { setcheckedDistance(key) }} style={{ marginRight: 10 }}>
                                                <Image source={assets.uncheck_circle} />
                                            </TouchableOpacity>
                                            <Text style={styles.unit}>{data}</Text>

                                        </View>
                                    }
                                </View>
                            )
                        })}
                </View>
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
    container2: {
        flexDirection: 'row',
        display: 'flex',
        paddingVertical: 18,
    },
    title: {
        color: Color.White1,
        lineHeight: 20,
        fontSize: 16,
        fontWeight: '600',
        width: 69,
        marginRight: 50
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






export default MeasuringUnit