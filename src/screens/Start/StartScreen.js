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
const StartScreen = ({navigation}) => {
    const [renderCount, setRenderCount] = React.useState(false)
    const [firstClick, setFirstClick] = React.useState(true);
    const [play, setPlayPause] = React.useState(true)

    const [secondLeft, setSecondLeft] = React.useState(10);
    const [timerOn, setTimerOn] = React.useState(false)


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
                        <TouchableOpacity onPress={() => {}}>
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

    
    return (
        <SafeAreaView style={{flex: 1, flexDirection: "column", justifyContent: "space-between", alignItems:"center",backgroundColor:"#141414"}}>

            <View style={{flex: 0, flexDirection: "row", alignItems:"center", marginTop:60}}>
                <TouchableOpacity onPress={() => {}}>
                    <View style={styles.inactiveViewButton}>
                        <Text style={styles.inactiveViewText}>Route</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {}}>
                    <View style={styles.activeViewButton}>
                        <Text style={styles.activeViewText}>Metric</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{flex: 0}}> 
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