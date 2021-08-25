import React from 'react'
import ProgressCircle from 'react-native-progress-circle' 
import { 
    View,
    Text, 
    StyleSheet, 
    TouchableOpacity,
    SafeAreaView,
    Image,
    Dimensions
} from 'react-native';
import { Color } from '../../color'
import assets from '../../assets';
import { useEffect } from 'react';
import _BackgroundTimer from 'react-native-background-timer';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken('pk.eyJ1IjoiaWNlY2xhd3MwMSIsImEiOiJja3Nyam5mMXgwbnVkMzJ0aHFiand4d28zIn0.ZGD0FnF6HF58GwiaLXvgJg');

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height
const StartScreen = ({navigation}) => {
    const [renderCount, setRenderCount] = React.useState(false)
    const [firstClick, setFirstClick] = React.useState(true);
    const [play, setPlayPause] = React.useState(true)

    const [secondLeft, setSecondLeft] = React.useState(10);
    const [timerOn, setTimerOn] = React.useState(false)

    const [displayMode, setDisplayMode] = React.useState('metric')

    useEffect(() => {
        if (timerOn) startTimer()
        else _BackgroundTimer.stopBackgroundTimer()
        
        return () => {
            _BackgroundTimer.stopBackgroundTimer()
        }
    }, [timerOn])

    useEffect(() => {
        if (secondLeft <= 0) {
            _BackgroundTimer.stopBackgroundTimer()
            setRenderCount(false)
            setFirstClick(false)
            setTimerOn(false)
        } 
    }, [secondLeft])
    const startTimer = () => {
        _BackgroundTimer.runBackgroundTimer(() => {
            setSecondLeft(secs => {
                if (secs > 0) return secs-1
                else return 0
            })
        }, 1000)
    }

    function changePlayPause() {
        if (play){
            //setTimerOn(false)
            return (<Image height = {40} width = {40} source = {assets.play_icon} style = {styles.subButton}/>)
        }
        else {
            if (firstClick){
                setRenderCount(true)
                setTimerOn(true)
                //change View here
            }
            return (<Image height = {40} width = {40} source = {assets.pause_icon} style = {styles.subButton}/>)
        }
    }

    const [unlock, setLock] = React.useState(true)
    function changeLock() {
        if (renderCount === true) { 
            return (
                <View style={{flex: 0, flexDirection: "row", height: 80, backgroundColor:"#242424"}}>
                <View style={styles.footerSecond}>
                    <TouchableOpacity onPress = {() => {
                        setSecondLeft(secondLeft + 10)
                    }}>
                        <Text style={styles.metricDigit}>Plus 10s</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footerSecond}>
                    <Text style={styles.metricDigit}>Start in {secondLeft}s</Text>
                </View>
            </View>
            )
        } else {
            if (unlock){
                return (
                    <View style={styles.footerPlayPause}>
                        <TouchableOpacity onPress={() => {navigation.goBack()}}>
                            <Image height = {40} width = {40} source = {assets.stop_icon} style = {styles.subButton}/>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {setLock(!unlock)}}>
                            <Image height = {50} width = {50} source = {assets.lock_icon} style = {styles.inactiveMainButton}/>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {setPlayPause(!play)}}>
                            {changePlayPause()}
                        </TouchableOpacity>
                    </View>
                )}
            else {
                return (
                    <View style={styles.footerPlayPause}>
                        <TouchableOpacity onPress={() => {setLock(!unlock)}}>
                            <Image height = {50} width = {50} source = {assets.lock_icon} style = {styles.activeMainButton}/>
                        </TouchableOpacity>
                    </View>
                )
            }
        }
    }
    function renderRoute(){
        return (
            <View style = {{
                flex: 0,
                height: deviceHeight - 170,
                width: deviceWidth,
                alignItems: 'center'
            }}>
                <MapboxGL.MapView 
                logoEnabled = {false}
                styleURL = {'mapbox://styles/iceclaws01/cksbggq7u0doy17uqgsoa8mm7'}
                style={{
                    width: deviceWidth,
                    height: deviceHeight - 205,
                    flex: 1
                }}>
                    <MapboxGL.Camera
                    zoomLevel = {17}
                    animationMode = {'flyTo'}
                    centerCoordinate = {[108.37343238117523,11.72747799249116]}
                    animationDuration = {1100}
                    />
                    <MapboxGL.PointAnnotation
                    draggable = {false}
                    id = {'1'}
                    selected = {true}
                    coordinate = {[108.37343238117523,11.72747799249116]}>
                        <View style={{
                        height: 20, 
                        width: 20, 
                        backgroundColor: Color.White1, 
                        borderRadius: 50, 
                        borderColor: Color.Main1, 
                        borderWidth: 3
                        }}/>
                    </MapboxGL.PointAnnotation>
                    <MapboxGL.PointAnnotation

                    draggable = {false}
                    id = {'1'}
                    selected = {true}
                    coordinate = {[108.37411761847079,11.729585259471818]}>

                    </MapboxGL.PointAnnotation>
                
                </MapboxGL.MapView>
                <View style = {{
                    position: 'absolute',
                    width: 170,
                    height: 170,
                    backgroundColor: Color.Dark2,
                    marginTop: 50,
                    borderRadius: 200,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style = {{
                        width: 156,
                        height: 156,
                        borderWidth: 4,
                        borderColor: Color.Main1,
                        borderRadius: 160,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <View style = {{
                            width: 116,
                            height: 58,
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>
                            <Image source = {assets.running_icon} style = {{
                                width: 20,
                                height: 19,
                                tintColor: Color.White1,
                                marginBottom: 1
                            }}/>
                            <Text style = {{
                                width: 115,
                                height: 33,
                                alignItems: 'center',
                                textAlign: 'center',
                                justifyContent: 'center',
                                color: Color.White1,
                                fontSize: 26,
                                fontWeight: 'bold'
                            }}>
                                01:30,23
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    function renderDisplayMode(){
        if (displayMode == 'metric'){
            return renderMetric()
        }
        if (displayMode == 'route'){
            return renderRoute()
        }
    }
    function renderMetric() {
        return (
            <View style = {{
                flex: 0,
            }}>
            <View style={{flex: 0,
                alignSelf: 'center',
                marginBottom: 70
                }}> 
                <ProgressCircle
                    percent={70} 
                    radius={113} 
                    borderWidth={7} 
                    color="#05DB0E" 
                    shadowColor="#242424"
                    bgColor="#141414"
                >
                    <View style={{flexDirection: "column"}}>
                        <Image height = {30} width = {30} source = {assets.running_icon} style = {{
                            height : 30,
                            width: 30,
                            tintColor: "#D8D8DF",
                            alignSelf: 'center'
                        }}/>
                        <Text style={styles.metricMainData}>{'02:47,10'}</Text>
                    </View>
                </ProgressCircle>
            </View>

            <View style={{flex: 0, flexDirection: "row", alignItems: "center"}}>
                <View style={{marginLeft: 11, marginRight: 11}}>
                    <ProgressCircle
                        percent={38}
                        radius={53}
                        borderWidth={7}
                        color="#05DB0E"
                        shadowColor="#242424"
                        bgColor="#141414"
                    >
                        <View style={{flexDirection: "column", alignItems:'center'}}>
                            <Text style={styles.metricDigit}>{'05:08'}</Text>
                            <Text style={styles.metricUnit}>{'min/km'}</Text>
                        </View>
                    </ProgressCircle>
                </View>

                <View style={{marginLeft: 11, marginRight: 11}}>
                    <ProgressCircle
                        percent={30}
                        radius={53}
                        borderWidth={7}
                        color="#05DB0E"
                        shadowColor="#242424"
                        bgColor="#141414"
                    >
                        <View style={{flexDirection: "column", alignItems:'center'}}>
                            <Text style={styles.metricDigit}>{'1.355'}</Text>
                            <Text style={styles.metricUnit}>{'kcal'}</Text>
                        </View>
                    </ProgressCircle>
                </View>

                <View style={{marginLeft: 11, marginRight: 11}}>
                    <ProgressCircle
                        percent={70}
                        radius={53}
                        borderWidth={7}
                        color="#05DB0E"
                        shadowColor="#242424"
                        bgColor="#141414"
                    >
                        <View style={{flexDirection: "column", alignItems:'center'}}>
                            <Text style={styles.metricDigit}>{'1,5'}</Text>
                            <Text style={styles.metricUnit}>{'km'}</Text>
                        </View>
                    </ProgressCircle>
                </View>
            </View>
        </View>
    )
}
    function activeRouteButton () {
        return (
            <TouchableOpacity onPress={() => {setDisplayMode('route')}}>
                <View style={styles.activeViewButton}>
                    <Text style={styles.activeViewText}>Route</Text>
                </View>
            </TouchableOpacity>
        )
    }
    function inactiveRouteButton () {
        return (
            <TouchableOpacity onPress={() => {setDisplayMode('route')}}>
                <View style={styles.inactiveViewButton}>
                    <Text style={styles.inactiveViewText}>Route</Text>
                </View>
            </TouchableOpacity>
        )
    }
    function inactiveMetricButton () {
        return (
            <TouchableOpacity onPress={() => {setDisplayMode('metric')}}>
                <View style={styles.inactiveViewButton}>
                    <Text style={styles.inactiveViewText}>Metric</Text>
                </View>
            </TouchableOpacity>
        )
    }
    function activeMetricButton () {
        return (
            <TouchableOpacity onPress={() => {setDisplayMode('metric')}}>
                <View style={styles.activeViewButton}>
                    <Text style={styles.activeViewText}>Metric</Text>
                </View>
            </TouchableOpacity>
        )
    }

    function renderMetricButton () {
        if (displayMode == 'metric'){
            return activeMetricButton()
        }
        else {
            return inactiveMetricButton()
        }
    }
    function renderRouteButton() {
        if (displayMode == 'route'){
            return activeRouteButton()
        }
        else {
            return inactiveRouteButton()
        }
    }
    return (
        <SafeAreaView style={{flex: 1, flexDirection: "column", justifyContent: "space-between", alignItems:"center",backgroundColor:"#141414"}}>
            <View style={{flex: 0, flexDirection: "row", alignItems:"center", marginTop:30, marginBottom: 10}}>
                {renderRouteButton()}

                {renderMetricButton()}
            </View>

            {renderDisplayMode()}
            {changeLock()}
            
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    activeViewButton: {
      backgroundColor: '#05DB0E',
      alignItems: 'center', 
      justifyContent: 'center',
      borderRadius: 8,
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 23,
      paddingRight: 23,
      width: 95,
      height: 32,
      marginLeft: 5,
      marginRight:5
    },
    activeViewText:{
      color: '#141414', 
      fontSize: 16, 
      fontWeight:'bold'
    },
    inactiveViewButton: {
      backgroundColor: '#242424',
      alignItems: 'center', 
      justifyContent: 'center',
      borderRadius: 8,
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 23,
      paddingRight: 23,
      width: 95,
      height: 32,
      marginLeft: 5,
      marginRight:5
    },
    inactiveViewText:{
      color: '#D8D8DF',
      fontSize: 16,
      fontWeight:'normal'
    },
    metricUnit:{
      fontSize: 16,
      color: "#A1A1A1"
    },
    metricDigit:{
      fontSize: 20, 
      fontWeight: 'bold', 
      color: "#D8D8DF" 
    },
    metricMainData:{
      fontSize: 36, 
      fontWeight: 'bold', 
      color:"#D8D8DF"
    },
    subButton:{
      height : 40,
      width: 40,
      tintColor: "#05DB0E",
      alignSelf: 'center'
    },
    activeMainButton:{
      height : 50,
      width: 50,
      tintColor: "#05DB0E",
      alignSelf: 'center',
      marginLeft: 50,
      marginRight: 50
    },
    inactiveMainButton:{
      height : 50,
      width: 50,
      tintColor: "#D8D8DF",
      alignSelf: 'center',
      marginLeft: 50,
      marginRight: 50
    },
    footerPlayPause:{
      flexDirection: "row",
      alignItems: 'center',
      justifyContent:"center",
      height: 80, 
      width: Dimensions.get('window').width,
      backgroundColor:"#242424"
    },
    footerSecond:{
      flex: 1,
      alignItems:"center",
      justifyContent:"center"
    }
});

export default StartScreen