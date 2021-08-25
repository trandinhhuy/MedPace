import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import { Color } from '../../color';
import Button from '../../components/Button';
import { NavigationContainer } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';
import assets from '../../assets';
import ProgressCircle from 'react-native-progress-circle'
import { SafeAreaView } from 'react-native-safe-area-context';

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height



const Home = ({ navigation }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => <TouchableOpacity style={styles.headerItem}>
                <View style={styles.innerCircle}>
                    <Image source={assets.profile_icon} style={styles.imagesTop} />
                </View>
            </TouchableOpacity>,
            headerRight: () => <TouchableOpacity style={styles.headerItem} onPress = {() => {navigation.navigate('Route')}
            }>
            <View style={styles.innerCircle}>
                <Image source={assets.location_icon} style={styles.imagesTop} />
            </View>
        </TouchableOpacity>
        })
    }, [navigation])
    return <View style={{
        flex: 1,
        backgroundColor: Color.Dark1,
        flexDirection: 'column'
    }}>
        <SafeAreaView>
            <View style={styles.circle}>
                <View style={styles.circle1}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Start')
                    }}>
                        <View style={styles.circle2} >
                            <ProgressCircle
                                percent={70}
                                color='#05DB0E'
                                shadowColor='#155018'
                                bgColor='#242424'
                                radius={106}
                                borderWidth={7}
                            >
                                <View style={{
                                    width: 87,
                                    height: 78,
                                    alignSelf: 'center',
                                    flexDirection: 'column'
                                }}>
                                    <Image source={assets.running_icon} style={{
                                        width: 26.67,
                                        height: 25.74,
                                        tintColor: '#D8D8DF',
                                        alignSelf: 'center'
                                    }} />
                                    <View style={{
                                        width: 87,
                                        height: 44,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#D8D8DF',
                                    }}><Text style={{
                                        color: '#D8D8DF',
                                        fontSize: 24,
                                        fontWeight: 'bold'
                                    }}>
                                            START
                                        </Text>
                                    </View>
                                </View>
                            </ProgressCircle>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.infoView}>
                <View style={styles.firstRow}>
                    <View style={styles.itemLeft}>
                        <Text style={{
                            height: 24,
                            alignSelf: 'center',
                            fontSize: 20,
                            color: '#D8D8DF'
                        }}>
                            Pace
                        </Text>
                        <Text style={{
                            color: '#05DB0E',
                            alignSelf: 'center',
                            marginTop: 8,
                            fontSize: 38
                        }}>
                            5:00
                        </Text>
                        <Text style={{
                            alignSelf: 'center',
                            color: '#A1A1A1'
                        }}>
                            min/km
                        </Text>
                    </View>
                    <View style={styles.itemRight}>
                        <Text style={{
                            height: 24,
                            alignSelf: 'center',
                            fontSize: 20,
                            color: '#D8D8DF'
                        }}>
                            Calories
                        </Text>
                        <Text style={{
                            color: '#05DB0E',
                            alignSelf: 'center',
                            marginTop: 8,
                            fontSize: 38
                        }}>
                            1.523
                        </Text>
                        <Text style={{
                            alignSelf: 'center',
                            color: '#A1A1A1'
                        }}>
                            kcal
                        </Text>
                    </View>
                </View>
                <View style={styles.secondRow}>
                    <View style={styles.itemLeft}>
                        <Text style={{
                            height: 24,
                            alignSelf: 'center',
                            fontSize: 20,
                            color: '#D8D8DF'
                        }}>
                            Distance
                        </Text>
                        <Text style={{
                            color: '#05DB0E',
                            alignSelf: 'center',
                            marginTop: 8,
                            fontSize: 38
                        }}>
                            15,6
                        </Text>
                        <Text style={{
                            alignSelf: 'center',
                            color: '#A1A1A1'
                        }}>
                            km
                        </Text>
                    </View>
                    <View style={styles.itemRight}>
                        <Text style={{
                            height: 24,
                            alignSelf: 'center',
                            fontSize: 20,
                            color: '#D8D8DF'
                        }}>
                            Time
                        </Text>
                        <Text style={{
                            color: '#05DB0E',
                            alignSelf: 'center',
                            marginTop: 8,
                            fontSize: 38
                        }}>
                            0,5
                        </Text>
                        <Text style={{
                            alignSelf: 'center',
                            color: '#A1A1A1'
                        }}>
                            hr
                        </Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    </View>
}

const styles = StyleSheet.create({
    headerItem: {
        paddingHorizontal: 5,
        paddingVertical: 5,
        width: 80,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        color: Color.White1,
        fontSize: 20,
        lineHeight: 24,
        fontWeight: '600',
        marginHorizontal: 94 ,
        alignItems:'center',
        justifyContent: 'center',
        width: 58,
        height: 24,
        marginTop: 13

    },
    imagesTop: {
        width: 15,
        height: 15,
        margin: 8,
        tintColor: '#05DB0E'
    },
    innerCircle: {
        marginVertical: 6,
        marginHorizontal: 8,
        borderRadius: 50,
        width: 32,
        height: 32,
        backgroundColor: '#132813',
    },
    circle: {
        marginTop: 48,
        alignSelf: 'center',
        width: deviceWidth * 66 / 100,
        height: deviceWidth * 66 / 100,
        borderRadius: 248,
        backgroundColor: '#141414',
        shadowOffset: {
            width: 0,
            height: -3
        },
        shadowColor: 'white',
        elevation: 10,
        justifyContent: 'center'
    },
    circle1: {
        alignSelf: 'center',
        width: deviceWidth * 0.613333333,
        height: deviceWidth * 0.613333333,
        backgroundColor: '#242424',
        borderRadius: 230,
        alignItems: 'center',
        justifyContent: 'center'
    },
    circle2: {
        alignSelf: 'center',
        borderRadius: 212,
        marginHorizontal: 11,
        width: deviceWidth * 0.565333333,
        height: deviceWidth * 0.565333333,
        alignItems: 'center',
        justifyContent: 'center'
    },
    infoView: {
        marginTop: deviceHeight * 0.05049,
        width: deviceWidth * 0.914666666,
        height: deviceHeight * 0.314039,
        alignSelf: 'center',
        flexDirection: 'column'
    },
    firstRow: {
        width: deviceWidth * 0.906666666 + 3,
        height: deviceHeight * 0.13054,
        flexDirection: 'row',
    },
    secondRow: {
        width: deviceWidth * 0.906666666 + 3,
        height: deviceHeight * 0.13054,
        marginTop: deviceHeight * 0.049,
        flexDirection: 'row',
    },
    itemLeft: {
        width: deviceWidth * 0.906666666 / 2,
        height: deviceHeight * 0.13054,
        marginRight: 3,
        flexDirection: 'column'
    },
    itemRight: {
        width: deviceWidth * 0.906666666 / 2,
        height: deviceHeight * 0.13054,
        flexDirection: 'column'
    }
})
export default Home;