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
const Notification = ({ navigation }) => {
    const [isSteps, setSteps] = useState(false);
    const toggleSteps = () => setSteps(previousState => !previousState);
    const [isPace, setPace] = useState(false);
    const togglePace = () => setPace(previousState => !previousState);
    const [isCalories, setCalories] = useState(false);
    const toggleCalories = () => setCalories(previousState => !previousState);
    const [isDistance, setDistance] = useState(false);
    const toggleDistance = () => setDistance(previousState => !previousState);
    const [isTime, setTime] = useState(false);
    const toggleTime = () => setTime(previousState => !previousState);
    const [isDaily, setDaily] = useState(false);
    const toggleDaily = () => setDaily(previousState => !previousState);
    const [isWeekly, setWeekly] = useState(false);
    const toggleWeekly = () => setWeekly(previousState => !previousState);
    const [isMonthly, setMonthly] = useState(false);
    const toggleMonthly = () => setMonthly(previousState => !previousState);
    return (

        <View style={{ flexDirection: 'column' }}>
            {/* <View style={{ backgroundColor: Color.Dark1, height: 50, width: deviceWidth, alignItems: 'center', flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={assets.arrow_back} style={{ width: 15, marginLeft: 24 }}></Image>
                </TouchableOpacity>
                <Text style={{ color: Color.White1, fontSize: 20, lineHeight: 24, fontWeight: '600', textAlign: 'center', flex: 1 }}>
                    Notification
                </Text>
                <View style={{ width: 31 }}></View>
            </View> */}
            <View style={{ height: 1, backgroundColor: '#242424', width: deviceWidth }}></View>
            <View style={styles.container}>
                <Text style={styles.title}>Goal achieved</Text>
                <View style={styles.divide}></View>
                <View style={styles.container2}>
                    <Text style={styles.unit}>Steps</Text>
                    <TouchableOpacity onPress={toggleSteps} style={styles.arrow}>
                            <Image
                                source={isSteps ? assets.switch_on : assets.switch_off} />
                        </TouchableOpacity>
                </View>
                <View style={styles.divide}></View>
                <View style={styles.container2}>
                    <Text style={styles.unit}>Pace</Text>
                    <TouchableOpacity onPress={togglePace} style={styles.arrow}>
                            <Image
                                source={isPace ? assets.switch_on : assets.switch_off} />
                        </TouchableOpacity>
                </View>
                <View style={styles.divide}></View>
                <View style={styles.container2}>
                    <Text style={styles.unit}>Calories</Text>
                    <TouchableOpacity onPress={toggleCalories} style={styles.arrow}>
                            <Image
                                source={isCalories ? assets.switch_on : assets.switch_off} />
                        </TouchableOpacity>
                </View>
                <View style={styles.divide}></View>
                <View style={styles.container2}>
                    <Text style={styles.unit}>Distance</Text>
                    <TouchableOpacity onPress={toggleDistance} style={styles.arrow}>
                            <Image
                                source={isDistance ? assets.switch_on : assets.switch_off} />
                        </TouchableOpacity>
                </View>
                <View style={styles.divide}></View>
                <View style={styles.container2}>
                    <Text style={styles.unit}>Time</Text>
                    <TouchableOpacity onPress={toggleTime} style={styles.arrow}>
                            <Image
                                source={isTime ? assets.switch_on : assets.switch_off} />
                        </TouchableOpacity>
                </View>
                <Text style={styles.title}>Report</Text>
                <View style={styles.divide}></View>
                <View style={styles.container2}>
                    <Text style={styles.unit}>Daily</Text>
                    <TouchableOpacity onPress={toggleDaily} style={styles.arrow}>
                            <Image
                                source={isDaily ? assets.switch_on : assets.switch_off} />
                        </TouchableOpacity>
                </View>
                <View style={styles.divide}></View>
                <View style={styles.container2}>
                    <Text style={styles.unit}>Weekly</Text>
                    <TouchableOpacity onPress={toggleWeekly} style={styles.arrow}>
                            <Image
                                source={isWeekly ? assets.switch_on : assets.switch_off} />
                        </TouchableOpacity>
                </View>
                <View style={styles.divide}></View>
                <View style={styles.container2}>
                    <Text style={styles.unit}>Monthly</Text>
                    <TouchableOpacity onPress={toggleMonthly} style={styles.arrow}>
                            <Image
                                source={isMonthly ? assets.switch_on : assets.switch_off} />
                        </TouchableOpacity>
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
    },
    title: {
        fontSize: 16,
        lineHeight: 20,
        fontWeight: '600',
        color: Color.White2,
        marginBottom: 16,
        marginTop: 46
    },
    container2: {
        paddingVertical: 18,
        display: 'flex',
        flexDirection: 'row'
    },
    unit: {
        color: Color.White1,
        lineHeight: 20,
        fontSize: 16,
        fontWeight: '400',
        flex: 1
    },
    divide: {
        height: 1,
        backgroundColor: '#242424',
        width: deviceWidth - 32
    }

})






export default Notification