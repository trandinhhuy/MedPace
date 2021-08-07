import * as React from 'react'
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
import Icon from '../assets/Icon/Icon';
//import { useEffect } from 'react';
//import { timeout } from 'async';
const StartMetricScreen = ({navigation}) => {

    const [play, setPlayPause] = React.useState(true)
    function changePlayPause() {
        if (play){
            return (<Image height = {40} width = {40} source = {Icon.playIcon} style = {styles.subButton}/>)
        }
        else {
            return (<Image height = {40} width = {40} source = {Icon.pauseIcon} style = {styles.subButton}/>)
        }
    }
    
    const [waitTime, setWaitTime] = React.useState(10)

   // const [showButton, setShowButton] = React.useState(false)
   // useEffect(() => {
        
        /*if (waitTime > 0){
            let time = setTimeout(() => {
                setWaitTime(waitTime - 1)
            }, 1000)
            setInterval(() => {
                
            },10);
        }
        for (let i = 0 ; i < waitTime ; i++){
            let temp = waitTime
            let timeID = setTimeout(() => {
                setWaitTime(temp - 1)
            }, 1000)
            return () => {
                clearTimeout(timeID)
            }
        }*/
        
    //}, [])


    const [unlock, setLock] = React.useState(true)
    function changeLock() {
        if (unlock){
            return (
                <View style={styles.footerPlayPause}>
                    <TouchableOpacity onPress={() => {}}>
                        <Image height = {40} width = {40} source = {Icon.stopIcon} style = {styles.subButton}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {setLock(!unlock)}}>
                        <Image height = {50} width = {50} source = {Icon.blockIcon} style = {styles.inactiveMainButton}/>
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
                        <Image height = {50} width = {50} source = {Icon.blockIcon} style = {styles.activeMainButton}/>
                    </TouchableOpacity>
                </View>
            )
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
                        <Image height = {30} width = {30} source = {Icon.runIcon} style = {{
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
            
            <View style={{flex: 0, flexDirection: "row", height: 80, backgroundColor:"#242424"}}>
                <View style={styles.footerSecond}>
                    <TouchableOpacity onPress={() => {setWaitTime(waitTime + 10)}}>
                        <Text style={styles.metricDigit}>Plus 10s</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footerSecond}>
                    <Text style={styles.metricDigit}>Start in {waitTime}s</Text>
                </View>
            </View>
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
    flex: 0,
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

export default StartMetricScreen;