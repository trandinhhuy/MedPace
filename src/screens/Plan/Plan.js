import React from 'react'
import { 
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    StatusBar
} from 'react-native';
import { useEffect } from 'react';
import {Color} from '../../color';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';
import assets from '../../assets';
import { Dimensions } from 'react-native';
import * as Progress from 'react-native-progress';
import { set } from 'react-native-reanimated';

let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height

const PlanScreen = ({navigation}) => {
    const [runCurrentPaceH, setRunCurrentPaceH] = React.useState(5)
    const [runCurrentPaceM, setRunCurrentPaceM] = React.useState(30)
    const [runGoalPaceH, setRunGoalPaceH] = React.useState(6)
    const [runGoalPaceM, setRunGoalPaceM] = React.useState(50)
    const [runCalories, setRunCalories] = React.useState(2000)
    const [runGoalCalories, setRunGoalCalories] = React.useState(3000)
    const [runDistance, setRunDistance] = React.useState(2.5)
    const [runGoalDistance, setRunGoalDistance] = React.useState(3.7)
    const [walkStep, setWalkStep] = React.useState(400)
    const [walkGoalStep, setWalkGoalStep] = React.useState(550)
    const [walkCalories, setWalkCalories] = React.useState(600)
    const [walkGoalCalories, setWalkGoalCalories] = React.useState(1000)
    const [currentDate, setCurrentDate] = React.useState(new moment());
    const newGoal = React.useRef()
    let customDateStyle = [];
    let today = moment();
    let day = today.clone().startOf('month');
    while(day.add(1, 'day').isSame(today, 'month')) {
        customDateStyle.push({
          date: day.clone(),
          // Random colors
          textStyle: {color: Color.White1,
            justifyContent: 'center'}, // sets the font color
          containerStyle: [], // extra styling for day container
          allowDisabled: true, // allow custom style to apply to disabled dates
        });
    }

    function onDateChange(date, type) {
        setCurrentDate(date)
        let paceH = Math.floor(5 + Math.random() * 9)
        let paceM = Math.floor(Math.random() * 6) * 10
        setRunCurrentPaceH (paceH)
        setRunCurrentPaceM (paceM)

        let goalPaceH = Math.floor(3 + Math.random() * 3) + paceH
        let goalPaceM = Math.floor(Math.random() * 6) * 10
        setRunGoalPaceH(goalPaceH)
        setRunGoalPaceM(goalPaceM)

        let calories = Math.floor(1 + Math.random() * 6) * 1000 + Math.floor(Math.random() * 10) * 100
        setRunCalories(calories)
        setRunGoalCalories(calories + 1000 + Math.floor(Math.random() * 3) * 100)

        let distance = 5 + (Math.random() * 6)
        let runDistance = distance.toFixed(1);
        let goalDistance = distance + 1 + (Math.floor(Math.random() * 5))
        setRunDistance(runDistance);
        setRunGoalDistance(goalDistance.toFixed(1))

        let walkKcal = Math.floor(Math.random() * 10) * 100 + Math.floor(Math.random() * 2) * 1000
        setWalkCalories(walkKcal)
        let walkGoalKcal = walkKcal + Math.floor(Math.random() * 15) * 100
        setWalkGoalCalories(walkGoalKcal)

        let step = 500 + Math.floor(Math.random() * 11) * 100
        let goalStep = 100 + step + Math.floor(Math.random() * 5) * 100
        setWalkStep(step)
        setWalkGoalStep(goalStep)

    }
    let previousButton = () => {
        return (
            <Image source = {assets.go_left} style = {{
            tintColor: Color.Main1,
            height: 20,
            width: 20,
            marginLeft: 50
            }}/>
        )
    }
    let nextButton = () => {
        return(
            <Image source = {assets.go_right} style = {{
                tintColor: Color.Main1,
                height: 20,
                width: 20,
                marginRight: 50
                }}/>
        )
    }
    return (
        <SafeAreaView style={{flex:1,  backgroundColor: Color.Dark1,}}>
        <View style = {{
            flex: 1, 
            alignItems: 'center',
            backgroundColor: Color.Dark1,
            flexDirection: 'column'
        }}>
            
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
                <TouchableOpacity ref = {newGoal} onPress = {() => {
                    navigation.navigate('NewGoal', {name: 'New Goal'})  
                }}>
                <View style = {{
                    marginRight: deviceWidth * 0.293333 - 15,
                    padding: 7,
                    backgroundColor : 'rgba(5, 219, 14, 0.1)',
                    borderRadius: 100,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Image source = {assets.plus} style = {{
                        tintColor: Color.Main1,
                        width: 18,
                        height: 18,
                    }}/>
                </View>
                </TouchableOpacity>
                <Text style = {{
                    color: Color.White1,
                    fontSize: 20,
                    fontWeight: 'bold',
                    width: 60,
                    textAlign: 'center'
                }}>Plan</Text>
                <TouchableOpacity onPress = {() => {
                    navigation.navigate('NewGoal', {name: 'Edit Goal'})
                }}>
                <View style = {{
                    marginLeft: deviceWidth * 0.293333 - 15,
                    padding: 7,
                    backgroundColor : 'rgba(5, 219, 14, 0.1)',
                    borderRadius: 100,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Image source = {assets.edit} style = {{
                        tintColor: Color.Main1,
                        width: 18,
                        height: 18,
                        
                    }}/>
                </View>
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle = {{
                alignItems: 'center'
            }} style = {{
                flex: 1,
                flexDirection: 'column',
                marginBottom: 10
            }}>
            <View style = {{
                marginTop: 30,
                width: deviceWidth * 0.915,
                height: deviceHeight * 0.405 + 100,
                borderWidth: 1,
                borderRadius: 30,
                borderColor: 'rgba(216, 216, 223, 0.1)',
                paddingVertical: 30,
            }}>
                <CalendarPicker 
                textStyle = {{
                    color: '#D8D8DF',
                }}
                previousComponent = {previousButton()}
                nextComponent = {nextButton()}
                customDatesStyles = {customDateStyle}
                selectedDayColor = {Color.Main1}
                disabledDatesTextStyle = {{
                    color: Color.Main1
                }}
                todayBackgroundColor={Color.Dark1}
                todayTextStyle = {{
                    borderRadius: 100,
                    paddingVertical: 4.9,
                    paddingHorizontal: 6.8,
                    borderWidth: 1,
                    borderColor: Color.Main1,
                    textAlign: 'center',
                    justifyContent: 'center'
                }}
                onDateChange = {(date, type) => onDateChange(date, type)}
                >
                </CalendarPicker>
            </View>
            <View style = {{
                flex: 2,
                width: deviceWidth * 0.9147,
                height: 30,
                marginTop: 20,
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Text style = {{
                    color: Color.White1,
                    fontSize: 20,
                    fontWeight: 'bold',
                    width: 125/375 * deviceWidth
                }}>
                    {currentDate.format("DD MMM YYYY")}
                </Text>
                <TouchableOpacity onPress = {() => {
                    onDateChange(moment())
                }}>
                    <Text style = {{
                        color: Color.White1,
                        fontSize: 15,
                        width: 93/375 * deviceWidth,
                        fontWeight: 'bold',
                        textAlign: 'right',
                        marginLeft: deviceWidth / 3
                    }}>
                        Go to today
                    </Text>
                </TouchableOpacity>
            </View>
            <View style = {{
                width: 343/375 * deviceWidth,
                height: 284/812 * deviceHeight,
                
                marginTop: 20,
                flexDirection: 'column'
            }}>
                <View style = {{
                    height: 40,
                    flexDirection: 'row',
                    marginBottom: 10
                }}>
                    <View style = {{
                        width: 40,
                        height: 40,
                        borderRadius: 100,
                        backgroundColor: '#242424',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Image source = {assets.running_icon} style = {{
                            width: 19.3,
                            height: 20,
                            tintColor: Color.White1
                        }}/>
                    </View>
                    <View style = {{
                        width: 68,
                        height: 40,
                        marginLeft: 20,
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Image source = {assets.tick} style = {{
                            width: 15,
                            height: 15,
                            tintColor: Color.White1,
                            marginRight: 10
                        }}/>
                        <Text style = {{
                            fontWeight: 'bold',
                            fontSize: 16,
                            color: Color.Main1
                        }}>6:30</Text>
                    </View>
                </View>
                <View style = {{
                    height: 284/812 * deviceHeight - 50,
                    width: 343/375 * deviceWidth,
                    flexDirection: 'row',
                    marginBottom: 50
                }}>
                    <View style = {{
                        height: 284/812 * deviceHeight - 50,
                        width: 1,
                        backgroundColor: Color.White1,
                        marginHorizontal: 20
                    }}/>
                    <View style = {{
                        height: 284/812 * deviceHeight - 50,
                        width: 343/375 * deviceWidth - 41,
                        flexDirection: 'column',
                    }}>
                        <View style = {{
                            width: 343/375 * deviceWidth - 41,
                            height: (284/812 * deviceHeight - 110) / 3,
                            backgroundColor: '#242424',
                            marginBottom: 30,
                            borderBottomLeftRadius: 10,
                            borderTopRightRadius: 10,
                            alignItems: 'center',
                            flexDirection: 'row'
                        }}>
                            <View style = {{
                                marginLeft: 10,
                                width: 90,
                                height: (284/812 * deviceHeight - 110) / 3 - 20,
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <View style = {{
                                    width: 90,
                                }}>
                                    <Text style = {{
                                        width: 90,
                                        color: Color.White1,
                                        fontSize: 16,
                                        fontWeight: 'bold'
                                    }}>
                                        Pace
                                    </Text>
                                    <Text style = {{
                                        width: 90,
                                        color: Color.White1,
                                        opacity: 0.7,
                                        fontSize: 14
                                    }}>
                                        min/km
                                    </Text>
                                </View>
                                <View style = {{
                                    height: (284/812 * deviceHeight - 110) / 3 - 31,
                                    width: 343/375 * deviceWidth - 151,
                                    marginRight: 20,

                                    flexDirection: 'column'
                                }}>
                                    <Text style = {{
                                        width: 343/375 * deviceWidth - 151,
                                        textAlign: 'right',
                                        color: Color.White1
                                    }}>
                                        {runCurrentPaceH}:{runCurrentPaceM}/{runGoalPaceH}:{runGoalPaceM}
                                    </Text>
                                    <Progress.Bar progress = {(runCurrentPaceH * 60 + runCurrentPaceM) / (runGoalPaceH * 60 + runGoalPaceM)} width = {343/375 * deviceWidth - 151} color = {Color.Main1} unfilledColor = {'#242424'}/>
                                </View>
                            </View>
                            <View>

                            </View>
                        </View>
                        <View style = {{
                            width: 343/375 * deviceWidth - 41,
                            height: (284/812 * deviceHeight - 110) / 3,
                            backgroundColor: '#242424',
                            marginBottom: 30,
                            borderBottomLeftRadius: 10,
                            borderTopRightRadius: 10,
                            alignItems: 'center',
                            flexDirection: 'row'
                        }}>
                            <View style = {{
                                marginLeft: 10,
                                width: 90,
                                height: (284/812 * deviceHeight - 110) / 3 - 20,
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <View style = {{
                                    width: 90,
                                }}>
                                    <Text style = {{
                                        width: 90,
                                        color: Color.White1,
                                        fontSize: 16,
                                        fontWeight: 'bold'
                                    }}>
                                        Calories
                                    </Text>
                                    <Text style = {{
                                        width: 90,
                                        color: Color.White1,
                                        opacity: 0.7,
                                        fontSize: 14
                                    }}>
                                        Kcal
                                    </Text>
                                </View>
                                <View style = {{
                                    height: (284/812 * deviceHeight - 110) / 3 - 31,
                                    width: 343/375 * deviceWidth - 151,
                                    marginRight: 20,

                                    flexDirection: 'column'
                                }}>
                                    <Text style = {{
                                        width: 343/375 * deviceWidth - 151,
                                        textAlign: 'right',
                                        color: Color.White1
                                    }}>
                                        {runCalories}/{runGoalCalories}
                                    </Text>
                                    <Progress.Bar progress = {runCalories / runGoalCalories} width = {343/375 * deviceWidth - 151} color = {Color.Main1} unfilledColor = {'#242424'}/>
                                </View>
                            </View>
                            <View>

                            </View>
                        </View>
                        <View style = {{
                            width: 343/375 * deviceWidth - 41,
                            height: (284/812 * deviceHeight - 110) / 3,
                            backgroundColor: '#242424',
                            borderBottomLeftRadius: 10,
                            borderTopRightRadius: 10,
                            alignItems: 'center',
                            flexDirection: 'row'
                        }}>
                            <View style = {{
                                marginLeft: 10,
                                width: 90,
                                height: (284/812 * deviceHeight - 110) / 3 - 20,
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <View style = {{
                                    width: 90,
                                }}>
                                    <Text style = {{
                                        width: 90,
                                        color: Color.White1,
                                        fontSize: 16,
                                        fontWeight: 'bold'
                                    }}>
                                        Distance
                                    </Text>
                                    <Text style = {{
                                        width: 90,
                                        color: Color.White1,
                                        opacity: 0.7,
                                        fontSize: 14
                                    }}>
                                        km
                                    </Text>
                                </View>
                                <View style = {{
                                    height: (284/812 * deviceHeight - 110) / 3 - 31,
                                    width: 343/375 * deviceWidth - 151,
                                    marginRight: 20,

                                    flexDirection: 'column'
                                }}>
                                    <Text style = {{
                                        width: 343/375 * deviceWidth - 151,
                                        textAlign: 'right',
                                        color: Color.White1
                                    }}>
                                        {runDistance}/{runGoalDistance}
                                    </Text>
                                    <Progress.Bar progress = {runDistance/runGoalDistance} width = {343/375 * deviceWidth - 151} color = {Color.Main1} unfilledColor = {'#242424'}/>
                                </View>
                            </View>
                            <View>

                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style = {{
                width: 343/375 * deviceWidth,
                height: 195/812 * deviceHeight,
                
                marginTop: 20,
                flexDirection: 'column'
            }}>
                <View style = {{
                    height: 40,
                    flexDirection: 'row',
                    marginBottom: 10
                }}>
                    <View style = {{
                        width: 40,
                        height: 40,
                        borderRadius: 100,
                        backgroundColor: '#242424',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Image source = {assets.walk} style = {{
                            width: 19.3,
                            height: 20,
                            tintColor: Color.White1
                        }}/>
                    </View>
                    <View style = {{
                        width: 68,
                        height: 40,
                        marginLeft: 20,
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Image source = {assets.clock} style = {{
                            width: 15,
                            height: 15,
                            tintColor: Color.White1,
                            marginRight: 10
                        }}/>
                        <Text style = {{
                            fontWeight: 'bold',
                            fontSize: 16,
                            color: Color.Main1
                        }}>18:30</Text>
                    </View>
                </View>
                <View style = {{
                    height: 195/812 * deviceHeight - 50,
                    width: 343/375 * deviceWidth,
                    flexDirection: 'row',
                    marginBottom: 50,
                }}>
                    <View style = {{
                        height: 195/812 * deviceHeight - 50,
                        width: 1,
                        backgroundColor: Color.Main1,
                        marginHorizontal: 20
                    }}/>
                    <View style = {{
                        height: 195/812 * deviceHeight - 50,
                        width: 343/375 * deviceWidth - 41,
                        flexDirection: 'column',
                    }}>
                        <View style = {{
                            width: 343/375 * deviceWidth - 41,
                            height: (284/812 * deviceHeight - 110) / 3,
                            backgroundColor: '#242424',
                            marginBottom: 30,
                            borderBottomLeftRadius: 10,
                            borderTopRightRadius: 10,
                            alignItems: 'center',
                            flexDirection: 'row'
                        }}>
                            <View style = {{
                                marginLeft: 10,
                                width: 90,
                                height: (284/812 * deviceHeight - 110) / 3 - 20,
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <View style = {{
                                    width: 90,
                                }}>
                                    <Text style = {{
                                        width: 90,
                                        color: Color.White1,
                                        fontSize: 16,
                                        fontWeight: 'bold'
                                    }}>
                                        Step
                                    </Text>
                                    <Text style = {{
                                        width: 90,
                                        color: Color.White1,
                                        opacity: 0.7,
                                        fontSize: 14
                                    }}>
                                        steps
                                    </Text>
                                </View>
                                <View style = {{
                                    height: (284/812 * deviceHeight - 110) / 3 - 31,
                                    width: 343/375 * deviceWidth - 151,
                                    marginRight: 20,

                                    flexDirection: 'column'
                                }}>
                                    <Text style = {{
                                        width: 343/375 * deviceWidth - 151,
                                        textAlign: 'right',
                                        color: Color.White1
                                    }}>
                                        {walkStep}/{walkGoalStep}
                                    </Text>
                                    <Progress.Bar progress = {walkStep / walkGoalStep} width = {343/375 * deviceWidth - 151} color = {Color.Main1} unfilledColor = {'#242424'}/>
                                </View>
                            </View>
                            <View>

                            </View>
                        </View>
                        <View style = {{
                            width: 343/375 * deviceWidth - 41,
                            height: (284/812 * deviceHeight - 110) / 3,
                            backgroundColor: '#242424',
                            borderBottomLeftRadius: 10,
                            borderTopRightRadius: 10,
                            alignItems: 'center',
                            flexDirection: 'row'
                        }}>
                            <View style = {{
                                marginLeft: 10,
                                width: 90,
                                height: (284/812 * deviceHeight - 110) / 3 - 20,
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <View style = {{
                                    width: 90,
                                }}>
                                    <Text style = {{
                                        width: 90,
                                        color: Color.White1,
                                        fontSize: 16,
                                        fontWeight: 'bold'
                                    }}>
                                        Calories
                                    </Text>
                                    <Text style = {{
                                        width: 90,
                                        color: Color.White1,
                                        opacity: 0.7,
                                        fontSize: 14
                                    }}>
                                        Kcal
                                    </Text>
                                </View>
                                <View style = {{
                                    height: (284/812 * deviceHeight - 110) / 3 - 31,
                                    width: 343/375 * deviceWidth - 151,
                                    marginRight: 20,

                                    flexDirection: 'column'
                                }}>
                                    <Text style = {{
                                        width: 343/375 * deviceWidth - 151,
                                        textAlign: 'right',
                                        color: Color.White1
                                    }}>
                                        {walkCalories}/{walkGoalCalories}
                                    </Text>
                                    <Progress.Bar progress = {walkCalories / walkGoalCalories} width = {343/375 * deviceWidth - 151} color = {Color.Main1} unfilledColor = {'#242424'}/>
                                </View>
                            </View>
                            <View>

                            </View>
                        </View>
                        
                    </View>
                </View>
            </View>
            </ScrollView>
        </View>
        </SafeAreaView>
    )
}

let styles = StyleSheet.create({
    textWhite: {
        color: 'white'
    }
})
export default PlanScreen;