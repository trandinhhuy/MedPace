import React from 'react'
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
    Image
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';
import assets from '../../assets';
import { Color } from '../../color'
import Chart from '../../components/Chart';
const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height
const generateDaysData = (factor = 500) => {
    return [...Array(24)].map((item, n) => ({
        value: Math.round(Math.random() * factor),
        label: [0, 7, 15, 23].includes(n) ? n + 1 : null
    }))

}

const generateWeekData = (factor = 500) => {
    const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    return [...Array(7)].map((item, n) => ({
        value: Math.round(Math.random() * factor),
        label: weekDays[n]
    }))

}

const generateMonthData = (factor = 500) => {
    var now = new Date();
    var days = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    return [...Array(days)].map((item, n) => ({
        value: Math.round(Math.random() * factor),
        label: [0, days - 1].includes(n) ? n + 1 : null
    }))
}
const generateYearData = (factor = 500) => {
    return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((item, n) => ({
        value: Math.round(Math.random() * factor),
        label: [0, 3, 7, 11].includes(n) ? item : ''
    }))
}

const Segmentation = ({
    options = ['tab1', 'tab2', 'tab3', 'tab4'],
    initialIndex = 0,
    containerStyle,
    onChangeItem = (index) => { }

}) => {
    const [activeIndex, setActiveIndex] = React.useState(initialIndex);
    return <View style={{ width: '80%', flexDirection: "row", paddingVertical: 20, marginHorizontal: "10%", justifyContent: "center", alignItems: 'center', ...containerStyle }}>
        {options.map((item, index) => <TouchableOpacity onPress={() => {
            setActiveIndex(index);
            onChangeItem(index)
        }} activeOpacity={0.8} key={index} style={{ justifyContent: 'center', alignItems: "center", flex: 1 }}>
            <Text style={{ color: Color.White1 }}>{item}</Text>
            <View style={{
                position: "absolute", width: '100%', height: 5, bottom: -10, backgroundColor: index == activeIndex ? Color.Main1 : Color.Dark2,
                borderTopLeftRadius: index == 0 ? 5 : 0,
                borderBottomLeftRadius: index == 0 ? 5 : 0,
                borderTopRightRadius: index == options.length - 1 ? 5 : 0,
                borderBottomRightRadius: index == options.length - 1 ? 5 : 0,
            }} />
        </TouchableOpacity>)}
    </View>
}

const GoalItem = ({
    title,
    subtitle,
    value, 
    goal,
    percentage=60,
}) => {

    return <View style={{flexDirection:'row', justifyContent:"space-between", alignItems:"center", paddingHorizontal: 20, paddingVertical:5}}>
        <View style={{flex:1}}>
            <Text style={{color: Color.White1, fontSize:18,}}>{title}</Text>
            <Text style={{color: Color.White2, fontSize:14}}>{subtitle}</Text>
        </View>
        <View style={{flex:3, alignItems:"flex-end"}}>
            <Text style={{color: Color.White1, marginVertical:5,}}>{value} / {goal}</Text>
            <View style={{width:'100%', height: 5, borderRadius:5, backgroundColor: Color.Dark2}}>
                <View style={{width:`${percentage}%`, height: 5, borderRadius:5, backgroundColor: Color.Main1 }} />
            </View>
        </View>
    </View>
}

const ResultScreen = () => {

    const [dataTotal, setDataTotal] = React.useState({
        steps: {
            day: generateDaysData(),
            week: generateWeekData(),
            month: generateMonthData(),
            year: generateYearData(),
            total: '3,786'
        },
        distance: {
            day: generateDaysData(),
            week: generateWeekData(),
            month: generateMonthData(),
            year: generateYearData(),
            total: 132
        }
        
    })
    const [totalIndex, setTotalIndex] = React.useState(0);
    const [totalMode, setTotalMode] = React.useState('steps');

    const [avgIndex, setAvgIndex] = React.useState(0);
    const [avgMode, setAvgMode] = React.useState('steps');

    const [dataAvg, setDataAvg] = React.useState({
        steps: {
            day: generateDaysData(),
            week: generateWeekData(),
            month: generateMonthData(),
            year: generateYearData(),
            total: '3,786'
        },
        distance: {
            day: generateDaysData(),
            week: generateWeekData(),
            month: generateMonthData(),
            year: generateYearData(),
            total: 132
        }
        
    })

    

    const [goalIndex, setGoalIndex] = React.useState(0);


    return (

        <View style={{
            flex: 1,
            backgroundColor: Color.Dark1,
            flexDirection: 'column'
        }} >
            <SafeAreaView style={{ flex: 1 }}>
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
                
                <Text style = {{
                    color: Color.White1,
                    fontSize: 20,
                    fontWeight: 'bold',
                    width: 60,
                    textAlign: 'center'
                }}>Result</Text>
                
            </View>
                <ScrollView>

                    <View style={{ width: '100%', paddingHorizontal: 20, justifyContent: 'space-between', flexDirection: "row" }}>
                        <View>
                            <Text style={{ color: Color.White1, fontSize: 26, fontWeight: "700" }}>Total</Text>
                            <Text style={{ color: Color.Main1, fontSize: 30, fontWeight: "600" }}>{dataTotal[totalMode].total} <Text style={{ color: Color.Main1, fontSize: 20, fontWeight: "600" }}>{totalMode == 'steps' ? 'steps' : 'km'}</Text></Text>
                        </View>
                        <View>
                            <RNPickerSelect
                                fixAndroidTouchableBug
                                style={{
                                    inputIOS: {
                                        fontSize: 16,
                                        paddingVertical: 12,
                                        paddingHorizontal: 10,
                                        borderWidth: 1,
                                        borderColor: Color.Dark2,
                                        borderRadius: 8,
                                        color: Color.White1,
                                        // paddingRight: 0, // to ensure the text is never behind the icon
                                    },
                                    inputAndroid: {
                                        fontSize: 16,
                                        paddingVertical: 12,
                                        paddingHorizontal: 10,
                                        borderWidth: 1,
                                        borderColor: Color.Dark2,
                                        borderRadius: 8,
                                        color: Color.White1,
                                        // paddingRight: 30, // to ensure the text is never behind the icon
                                    },

                                }}
                                value={totalMode}
                                onValueChange={setTotalMode}
                                items={[
                                    { label: 'Steps', value: 'steps' },
                                    { label: 'Distance', value: 'distance' },
                                ]}
                            />
                        </View>
                    </View>
                    <Segmentation options={['Day', 'Week', 'Month', 'Year']} onChangeItem={(index) => setTotalIndex(index)} />
                    {totalIndex == 0 && <Chart containerStyle={{ marginTop: 10 }} maxValue={700} minValue={200} columnWidth={10} gutter={2} data={dataTotal[totalMode].day} />}
                    {totalIndex == 1 && <Chart containerStyle={{ marginTop: 10 }} maxValue={700} minValue={200} columnWidth={16} gutter={6} data={dataTotal[totalMode].week} />}
                    {totalIndex == 2 && <Chart containerStyle={{ marginTop: 10 }} maxValue={700} minValue={200} columnWidth={5} gutter={2} data={dataTotal[totalMode].month} />}
                    {totalIndex == 3 && <Chart containerStyle={{ marginTop: 10 }} maxValue={700} minValue={200} columnWidth={15} gutter={5} data={dataTotal[totalMode].year} />}

                    {/* ----------------- AVERAGE ------------------------- */}
                    <View style={{ width: '100%', paddingHorizontal: 20, justifyContent: 'space-between', flexDirection: "row", marginTop:50 }}>
                        <View>
                            <Text style={{ color: Color.White1, fontSize: 26, fontWeight: "700" }}>Average</Text>
                            <Text style={{ color: Color.Main1, fontSize: 30, fontWeight: "600" }}>{dataAvg[avgMode].total} <Text style={{ color: Color.Main1, fontSize: 20, fontWeight: "600" }}>{totalMode == 'steps' ? 'steps' : 'km'}</Text></Text>
                        </View>
                        <View>
                            <RNPickerSelect
                                fixAndroidTouchableBug
                                style={{
                                    inputIOS: {
                                        fontSize: 16,
                                        paddingVertical: 12,
                                        paddingHorizontal: 10,
                                        borderWidth: 1,
                                        borderColor: Color.Dark2,
                                        borderRadius: 8,
                                        color: Color.White1,
                                        // paddingRight: 0, // to ensure the text is never behind the icon
                                    },
                                    inputAndroid: {
                                        fontSize: 16,
                                        paddingVertical: 12,
                                        paddingHorizontal: 10,
                                        borderWidth: 1,
                                        borderColor: Color.Dark2,
                                        borderRadius: 8,
                                        color: Color.White1,
                                        // paddingRight: 30, // to ensure the text is never behind the icon
                                    },

                                }}
                                value={avgMode}
                                onValueChange={setAvgMode}
                                items={[
                                    { label: 'Steps', value: 'steps' },
                                    { label: 'Distance', value: 'distance' },
                                ]}
                            />
                        </View>
                    </View>
                    <Segmentation options={['Day', 'Week', 'Month', 'Year']} onChangeItem={(index) => setAvgIndex(index)} />
                    {avgIndex == 0 && <Chart containerStyle={{ marginTop: 10 }} maxValue={700} minValue={200} columnWidth={10} gutter={2} data={dataAvg[avgMode].day} />}
                    {avgIndex == 1 && <Chart containerStyle={{ marginTop: 10 }} maxValue={700} minValue={200} columnWidth={16} gutter={6} data={dataAvg[avgMode].week} />}
                    {avgIndex == 2 && <Chart containerStyle={{ marginTop: 10 }} maxValue={700} minValue={200} columnWidth={5} gutter={2} data={dataAvg[avgMode].month} />}
                    {avgIndex == 3 && <Chart containerStyle={{ marginTop: 10 }} maxValue={700} minValue={200} columnWidth={15} gutter={5} data={dataAvg[avgMode].year} />}

                    {/*  ----------------------------- GOAL -------------------------- */}

                    <View style={{ width: '100%', marginTop:50, paddingHorizontal: 20, justifyContent: 'space-between', flexDirection: "row" }}>
                        <View>
                            <Text style={{ color: Color.White1, fontSize: 26, fontWeight: "700" }}>Goal</Text>
                            <Text style={{ color: Color.Main1, fontSize: 30, fontWeight: "600" }}>39%</Text>
                        </View>
                        
                    </View>
                    <Segmentation options={['Day', 'Week', 'Month', 'Year']} onChangeItem={(index) => setGoalIndex(index)} />
                    <GoalItem title='Pace' subtitle='min/km' goal={'9:50'} value={'7:97'}/>
                    <GoalItem title='Calories' subtitle='min/km' goal={'12,000'} value={'2,088'} percentage={20}/>
                    <GoalItem title='Distance' subtitle='min/km' goal={'20,00'} value={'15,7'} percentage={75}/>
                    <GoalItem title='Pace' subtitle='min/km' goal={'9:50'} value={'7:97'}/>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}
export default ResultScreen