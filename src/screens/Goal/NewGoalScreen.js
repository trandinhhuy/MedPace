import { Color } from '../../color'
import React from 'react'
import assets from '../../assets';
import DateTimePicker from '@react-native-community/datetimepicker';
import { 
    View,
    Text, 
    StyleSheet, 
    TouchableOpacity,
    SafeAreaView,
    Image,
    Dimensions,
    ScrollView,
    FlatList
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

//constant
const deviceWidth = Dimensions.get('window').width
TouchableOpacity.defaultProps = { activeOpacity: 0.8};
const defaultStepNumber = 10000
const defaultCaloNumber = 2000
const defaultDistanceNumber = 2.5
const defaultTimeNumber = 1.0
const defaultPaceNumber = 5.00


//support function: convert to display, check os
function intToString (num){ 
    let res = ""
    while (num>1000){
        let mod = (num%1000).toString()
        while (mod.length<3) mod += "0"
        res = "." + mod + res
        num = (num-(num%1000))/1000
    }
    return (num.toString()+res)
}
function doubleToString(num){
    let token = num.toString().split(".")
    return (token.length==2)?(token[0]+","+token[1]):(token[0]+","+"0")
}
function paceToString(num){
    let token = num.toString().split(".")
    let res = token[0]+":"
    if (token.length<2) res += "00"
    else{
        if (token[1].length<2) token[1]+="0"
        res += token[1]
    }
    return res
}
function dateToString(date) {
    let res = ""
    switch (date.getMonth()) {
        case 0:
            res+="Jan "; break;
        case 1:
            res+="Feb "; break;
        case 2:
            res+="Mar "; break;
        case 3:
            res+="Apr "; break;
        case 4:
            res+="May "; break;
        case 5:
            res+="Jun "; break;
        case 6:
            res+="Jul "; break;
        case 7:
            res+="Aug "; break;
        case 8:
            res+="Nov "; break;
        case 9:
            res+="Oct "; break;
        case 10:
            res+="Nov "; break;
        case 11: 
            res+="Dec ";
      }
      return res + date.getDate() + ", " + date.getFullYear()
  };
  function timeToString(time){
      let temp = time.getHours()
      let res = (temp>9)?temp:("0"+temp)
      temp = time.getMinutes()
      res += ":"
      res += (temp>9)?temp:("0"+temp)
      return res
  }
  

const NewGoalScreen = ({route , navigation}) => {    
    const {name} = route.params
    const [stepNumber, setStepNumber] = React.useState(defaultStepNumber)
    const [caloNumber, setCaloNumber] = React.useState(defaultCaloNumber)
    const [distanceNumber, setDistanceNumber] = React.useState(defaultDistanceNumber)
    const [timeNumber, setTimeNumber] = React.useState(defaultTimeNumber)
    const [paceNumber, setPaceNumber] = React.useState(defaultPaceNumber)
    const [period, setPeriod] = React.useState('day');
    const periodList = [{name: 'Per Day'},{name: 'Per Week'}, {name: 'Per Month'}]
    const flatListRef = React.useRef()
    const [currentPeriod, setCurrentPeriod] = React.useState(0)
    //Reminder: on-off toggle
    const [reminder, setToggleReminder] = React.useState(true)
    function toggleReminder() {
        if (reminder){
            return (<View style={styles.toggleOn}><View style={styles.toggle}/></View>)}
        else {
            return (<View style={styles.toggleOff}><View style={styles.toggle}/></View>)}
    }

    //Method: radio button for walking and running
    const [isWalking, setMethod] = React.useState(true)
    function checkBoxWalking() {
        if (isWalking){
            return (<View style={styles.checkBoxOn}><View style={styles.check}/></View>)}
        else {
            return (<View style={styles.checkBoxOff}/>)}
    }
    function checkBoxRunning() {
        if (!isWalking){
            return (<View style={styles.checkBoxOn}><View style={styles.check}/></View>)}
        else {
            return (<View style={styles.checkBoxOff}/>)}
    }
    let onScrollEnd = (e) => {
        let contentOffset = e.nativeEvent.contentOffset;
        let viewSize = e.nativeEvent.layoutMeasurement;

        // Divide the horizontal offset by the width of the view to see which page is visible
        let pageNum = Math.floor(contentOffset.x / viewSize.width);
        setCurrentPeriod(pageNum)
        console.log(pageNum)
    }
    //Daily: show required metric depending on chosen method
    function compulsoryMetric(){
        if (isWalking){
            return(
                <View style={styles.col}>
                    <View style = {styles.rowInCol}><Text style={styles.normal16white}>Step</Text></View>
                    <Text style = {styles.metricNumber}>{intToString(stepNumber)}<Text style = {styles.metricUnit}>  steps</Text></Text>
                    <Slider
                        maximumValue={20000}
                        minimumValue={0}
                        minimumTrackTintColor={Color.Main1}
                        maximumTrackTintColor={Color.White2}
                        step={100}
                        value={stepNumber}
                        thumbTintColor="#fff"
                        onValueChange={(stepNumber) => setStepNumber(stepNumber)}/> 
                </View>
            )}
        else {
            return (
                <View style={styles.col}>
                    <View style = {styles.rowInCol}><Text style={styles.normal16white}>Pace</Text></View>
                    <Text style = {styles.metricNumber}>{paceToString(paceNumber)}<Text style = {styles.metricUnit}>  min/km</Text></Text>
                    <Slider
                        maximumValue={20.0}
                        minimumValue={0}
                        minimumTrackTintColor={Color.Main1}
                        maximumTrackTintColor={Color.White2}
                        step={0.5}
                        value={paceNumber}
                        thumbTintColor="#fff"
                        onValueChange={(paceNumber) => setPaceNumber(paceNumber)}/> 
                </View>
            )}
    }

    //Daily: on-off toggle
    const [calo, setToggleCalo] = React.useState(true)
    function toggleCalo() {
        if (calo){
            return (<View style={styles.toggleOn}><View style={styles.toggle}/></View>)}
        else {
            return (<View style={styles.toggleOff}><View style={styles.toggle}/></View>)}
    }
    const [distance, setToggleDistance] = React.useState(true)
    function toggleDistance() {
        if (distance){
            return (<View style={styles.toggleOn}><View style={styles.toggle}/></View>)}
        else {
            return (<View style={styles.toggleOff}><View style={styles.toggle}/></View>)}
    }
    const [time, setToggleTime] = React.useState(true)
    function toggleTime() {
        if (time){
            return (<View style={styles.toggleOn}><View style={styles.toggle}/></View>)}
        else {
            return (<View style={styles.toggleOff}><View style={styles.toggle}/></View>)}
    }
    function renderItemList({item}) {
        return (
            <Text style = {{
                textAlign: 'center',
                color: Color.White1,
                width: deviceWidth / 5
            }}>{item.name}</Text>
        )
    }
    const scrollLeft = () => {
        console.log("Left")
        flatListRef.current.scrollToOffset({ animated: true, offset: (currentPeriod - 1) * (deviceWidth / 5) })
        if (currentPeriod == 0){
            setCurrentPeriod(0)
        }
        else {
            setCurrentPeriod((Math.abs(currentPeriod - 1) % 3))
        }
    }
    const scrollRight = () => {
        console.log("Right")   
        flatListRef.current.scrollToOffset({ animated: true, offset: (currentPeriod + 1) * (deviceWidth / 5) })  
        if (currentPeriod == 2){
            setCurrentPeriod(2)
        } 
        else {
            setCurrentPeriod((currentPeriod + 1) % 3)
        }
    }
    const resetPeriod = () => {
        flatListRef.current.scrollToOffset({ animated: true, offset: 0 })
    }
    // Choose Start date
    const [startDateTime, setStartDateTime] = React.useState(new Date());
    const [mode, setMode] = React.useState('date');
    const [show, setShow] = React.useState(false);
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || startDateTime;
        setShow(Platform.OS === 'ios');
        setStartDateTime(currentDate);
    };


    return (
            <View style={{flex: 1, flexDirection: "column", justifyContent: "flex-start", backgroundColor: Color.Dark1}}>
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
                    marginRight: deviceWidth * 0.293333 - 30,
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
                    width: 90,
                    textAlign: 'center',
                }}>{name}</Text>
                <TouchableOpacity style = {{
                    opacity: 0
                }}>
                <View style = {{
                    marginLeft: deviceWidth * 0.293333 - 30,
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

                <ScrollView>

                    <View style={styles.part}>
                        <View style = {styles.firstRow}>
                            <Text style={styles.bold16}>Method</Text>
                            <TouchableOpacity onPress={() => {setMethod(isWalking?isWalking:!isWalking)}} style={styles.checkBox}>
                                {checkBoxWalking()}
                                <Text style={styles.normal16white}>Walking</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {setMethod(!isWalking?isWalking:!isWalking)}} style={styles.checkBox}>
                                {checkBoxRunning()}
                                <Text style={styles.normal16white}>Running</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.part}>
                        <View style = {styles.firstRow}>
                            <Text style={styles.bold16}>Time</Text>
                            <TouchableOpacity onPress={() => {
                                setStartDateTime(new Date())
                                setPeriod("day")
                                resetPeriod()
                                }}>
                                <Text style={styles.bold16white}>Reset to defaults</Text>     
                            </TouchableOpacity>
                        </View>
                        <View style = {styles.row}>
                            <Text style={styles.normal16white}>Start date</Text>
                            <TouchableOpacity onPress={() => {setShow(true), setMode('date')}}>
                                <Text style={styles.normal16white}>{dateToString(startDateTime)}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style = {styles.row}>
                            <Text style={styles.normal16white}>Period</Text> 
                            
                            <View style = {{
                                alignSelf: 'flex-end',
                                width: deviceWidth / 5 + 20,
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <TouchableOpacity onPress = {scrollLeft}>
                                    <Image source = {assets.go_left} style = {{
                                        tintColor: Color.Main1,
                                        width: 10,
                                        height: 10,

                                    }}/> 
                                </TouchableOpacity>
                                <FlatList
                                ref = {flatListRef}
                                showsHorizontalScrollIndicator = {false}
                                data = {periodList}
                                horizontal = {true}
                                pagingEnabled = {true}
                                renderItem = {renderItemList}
                                onMomentumScrollEnd = {onScrollEnd}
                                />
                                <TouchableOpacity onPress = {scrollRight}>
                                    <Image source = {assets.go_right} style = {{
                                        tintColor: Color.Main1,
                                        width: 10,
                                        height: 10,
                                    }}/> 
                                </TouchableOpacity>
                            </View>
                            {/* <Picker
                                style={{width: 160, height: 10, color: Color.White1, marginRight:-15}}
                                dropdownIconColor={Color.Main1}
                                selectedValue={period}
                                onValueChange={(itemValue,itemIndex) => setPeriod(itemValue)}>
                                <Picker.Item label="Per Day" value="day" />
                                <Picker.Item label="Per Week" value="week" />
                                <Picker.Item label="Per Month" value="month" />
                            </Picker> */}
   
                        </View>
                        <View style = {styles.row}>
                            <Text style={styles.normal16white}>Start time</Text>
                            <TouchableOpacity onPress={() => {setShow(true), setMode('time')}}>
                                <Text style={styles.normal16white}>{timeToString(startDateTime)}</Text>     
                            </TouchableOpacity>
                        </View>
                        <View style = {styles.row}>
                            <Text style={styles.normal16white}>Reminder</Text>
                            <TouchableOpacity onPress={() => {setToggleReminder(!reminder)}}>
                                {toggleReminder()}
                            </TouchableOpacity>                                 
                        </View>
                        {show && ( 
                            <DateTimePicker
                                value={startDateTime}
                                mode={mode}
                                display='default'
                                is24Hour={true}
                                minimumDate={new Date()}
                                onChange={onChange}/>)}
                    </View>


                    <View style={styles.part}>
                        <View style = {styles.firstRow}>
                            <Text style={styles.bold16}>Daily</Text>
                            <TouchableOpacity onPress={() => {
                                setCaloNumber(defaultCaloNumber)
                                setDistanceNumber(defaultDistanceNumber)
                                setTimeNumber(defaultTimeNumber)
                                setPaceNumber(defaultPaceNumber)
                                setStepNumber(defaultStepNumber)
                                }}>
                                <Text style={styles.bold16white}>Reset to defaults</Text>     
                            </TouchableOpacity>
                        </View>

                        {compulsoryMetric()}       

                        <View style={styles.col}>
                            <View style = {styles.rowInCol}>
                                <Text style={styles.normal16white}>Calories</Text>
                                <TouchableOpacity onPress={() => {setToggleCalo(!calo)}}>
                                    {toggleCalo()}
                                </TouchableOpacity>  
                            </View>
                            <Text style = {styles.metricNumber}>{intToString(caloNumber)} 
                                <Text style = {styles.metricUnit}>  kcal</Text>
                            </Text>                
                            <Slider
                                maximumValue={5000}
                                minimumValue={0}
                                minimumTrackTintColor={Color.Main1}
                                maximumTrackTintColor={Color.White2}
                                step={50}
                                value={caloNumber}
                                thumbTintColor="#fff"
                                onValueChange={(caloNumber) => setCaloNumber(caloNumber)}/> 
                        </View>

                        <View style={styles.col}>
                            <View style = {styles.rowInCol}>
                                <Text style={styles.normal16white}>Distance</Text>
                                <TouchableOpacity onPress={() => {setToggleDistance(!distance)}}>
                                    {toggleDistance()}
                                </TouchableOpacity>  
                            </View>
                            <Text style = {styles.metricNumber}>{doubleToString(distanceNumber)} 
                                <Text style = {styles.metricUnit}>  km</Text>
                            </Text>
                            <Slider
                                maximumValue={30}
                                minimumValue={0}
                                minimumTrackTintColor={Color.Main1}
                                maximumTrackTintColor={Color.White2}
                                step={0.5}
                                value={distanceNumber}
                                thumbTintColor="#fff"
                                onValueChange={(distanceNumber) => setDistanceNumber(distanceNumber)}/> 
                        </View>

                        <View style={styles.col}>
                            <View style = {styles.rowInCol}>
                                <Text style={styles.normal16white}>Time</Text>
                                <TouchableOpacity onPress={() => {setToggleTime(!time)}}>
                                    {toggleTime()}
                                </TouchableOpacity>  
                            </View>
                            <Text style = {styles.metricNumber}>{doubleToString(timeNumber)} 
                                <Text style = {styles.metricUnit}>  hr</Text>
                            </Text>
                            <Slider
                                maximumValue={5}
                                minimumValue={0}
                                minimumTrackTintColor={Color.Main1}
                                maximumTrackTintColor={Color.White2}
                                step={0.5}
                                value={timeNumber}
                                thumbTintColor="#fff"
                                onValueChange={(timeNumber) => setTimeNumber(timeNumber)}/> 
                        </View>
                        
                    </View>
                    <View style={styles.part}></View>
                </ScrollView>
            </View>
    )
}

const styles = StyleSheet.create({
  topContainer:{
      flex: 0,
      flexDirection: "row", 
      width: deviceWidth, 
      height: 50, 
      borderBottomWidth: 1, 
      borderBottomColor: Color.Dark2,
      justifyContent:"space-between",
      alignItems: "flex-end",
      paddingLeft: 16,
      paddingRight: 16
  },
  firstRow:{
      flexDirection: 'row',
      justifyContent:'space-between',
      marginBottom: 17
  },
  row:{
      flexDirection: 'row',
      borderTopWidth: 1,
      borderTopColor: Color.Dark2,
      justifyContent:'space-between',
      marginBottom: 17,
      paddingTop: 17,
      alignItems: 'center'
  },
  rowInCol:{
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: Color.Dark2,
    justifyContent:'space-between',
    paddingTop: 17,
    alignItems: 'center'
 },
 col:{
   flexDirection: 'column',
   marginBottom: 17
},
  bold16:{
    fontSize: 16,
    fontWeight: 'bold',
    color: Color.Main1
  },
  bold16white:{
    fontSize: 16,
    fontWeight: 'bold',
    color: Color.White1
  },
  normal16white:{
    fontSize: 16,
    fontWeight: 'normal',
    color: Color.White1
  },
  toggleOn:{
    flexDirection: 'row',
    backgroundColor:Color.Main1,
    borderRadius: 118,
    width: 45,
    height: 20,
    justifyContent:'flex-end',
    alignItems:'center'
  },
  toggle:{
    width: 18,
    height: 18,
    borderRadius: 18/2,
    backgroundColor: "#ffffff",
    margin: 1
  },
  toggleOff:{
    flexDirection: 'row',
    backgroundColor:Color.White2,
    borderRadius: 118,
    width: 45,
    height: 20,
    justifyContent:'flex-start',
    alignItems:'center'
  },
  part:{
    flex: 0,
    flexDirection: 'column',
    marginTop: 50,
    paddingLeft: 16,
    paddingRight: 16,
  },
  checkBoxOn:{
    width:20,
    height: 20,
    borderWidth: 1,
    borderRadius: 20/2,
    borderColor: Color.Main1,
    justifyContent:'center',
    alignItems:'center',
    marginRight: 10,
  },
  checkBoxOff:{
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 20/2,
    borderColor: Color.White2,
    marginRight: 10,
  },
  check:{
    margin:3,
    width:11,
    height:11,
    borderRadius: 11/2,
    backgroundColor:Color.Main2
  },
  checkBox:{
    flexDirection:'row', 
    justifyContent:'center', 
    alignItems:'center'
  },
  metricNumber:{
    fontSize: 32,
    color: Color.White1,
    marginTop: 10
  },
  metricUnit:{
    fontSize:16, 
    color:Color.White2
  }
});

export default NewGoalScreen;