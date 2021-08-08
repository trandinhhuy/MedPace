import React, { Component } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import {
    View,
    SafeAreaView,
    TouchableOpacity,
    Text,
    Image,
    StyleSheet,
    Dimensions,

} from 'react-native'
import { Color } from '../../color';
import assets from '../../assets'


const deviceWidth = Dimensions.get('window').width

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genderData: ['Male', 'Female'],
            heightData: ['cm', 'ft'],
            weightData: ['kg', 'lbs'],
            goalData: ['Lose weight', 'Maintain healthy weight', 'Get in shape', 'Build my cardio', 'Improve my performance', 'Take part in running contest', 'Just for fun'],
            checkedGender: 0,
            checkedHeight: 0,
            checkedWeight: 0,
            goals: [],
        }
    }

    componentDidMount() {
        let values = this.state.goalData
        let goal = []
        for (let i = 0; i < values.length; i++) {
            goal.push({
                id: i,
                value: values[i],
                checked: false
            })
        }
        this.setState({ goals: goal })
    }

    onchecked(key) {
        let data = this.state.goals
        let index = data.findIndex(x => x.id === key)
        data[index].checked = !data[index].checked
        this.setState({ goals: data })
    }
    
    render() {
        return (
            <View style={{ flexDirection: 'column' }}>
                <View style={{ backgroundColor: Color.Dark1, height: 50, width: deviceWidth,alignItems:'center', flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=> this.props.navigation.goBack()}>
                        <Image source={assets.arrow_back} style={{width:15,marginLeft: 24}}></Image>
                    </TouchableOpacity>
                    <Text style={{ color: Color.White1, fontSize: 20, lineHeight: 24, fontWeight: '600', textAlign:'center', flex:1}}>
                        Profile
                    </Text>
                    <View style={{width:31}}></View>
                </View>
                <View style={{ height: 1, backgroundColor: '#242424', width: deviceWidth }}></View>
                <ScrollView>
                    <View style={styles.container}>
                        <Text style={styles.title}>Information</Text>
                        <View style={styles.divide}></View>
                        <View style={styles.container2}>
                            <View style={styles.container3}>
                                <Image source={assets.gender} />
                                <Text style={styles.topic}>
                                    Gender
                                </Text>
                            </View>
                            {this.state.genderData.map((data, key) => {
                                return (
                                    <View key={key}>
                                        {this.state.checkedGender == key ?
                                            <View style={{ flexDirection: 'row', marginRight: 20, width: 64 }}>
                                                <TouchableOpacity style={{ marginRight: 10 }}>
                                                    <Image source={assets.check_circle} />
                                                </TouchableOpacity>
                                                <Text style={styles.unit}>{data}</Text>

                                            </View>
                                            :
                                            <View style={{ flexDirection: 'row', marginRight: 20, width: 64 }}>
                                                <TouchableOpacity onPress={() => { this.setState({ checkedGender: key }) }} style={{ marginRight: 10 }}>
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
                            <View style={styles.container3}>
                                <Image source={assets.birthday} />
                                <Text style={styles.topic}>
                                    Birthday
                                </Text>
                            </View>
                            <Text style={styles.info}>Jan 3, 2000</Text>

                        </View>
                        <View style={styles.divide}></View>
                        <View style={styles.container2}>
                            <View style={styles.container3}>
                                <Image source={assets.height} />
                                <Text style={styles.topic}>
                                    Height
                                </Text>
                            </View>
                            <Text style={styles.info}>180</Text>

                        </View>
                        <View style={{ marginBottom: 20, marginLeft: 121, flexDirection: 'row' }}>
                            {this.state.heightData.map((data, key) => {
                                return (
                                    <View key={key}>
                                        {this.state.checkedHeight == key ?
                                            <View style={{ flexDirection: 'row', marginRight: 20, width: 64 }}>
                                                <TouchableOpacity style={{ marginRight: 10 }}>
                                                    <Image source={assets.check_circle} />
                                                </TouchableOpacity>
                                                <Text style={styles.unit}>{data}</Text>

                                            </View>
                                            :
                                            <View style={{ flexDirection: 'row', marginRight: 20, width: 64 }}>
                                                <TouchableOpacity onPress={() => { this.setState({ checkedHeight: key }) }} style={{ marginRight: 10 }}>
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
                            <View style={styles.container3}>
                                <Image source={assets.weight} />
                                <Text style={styles.topic}>
                                    Weight
                                </Text>
                            </View>
                            <Text style={styles.info}>80</Text>

                        </View>
                        <View style={{ marginBottom: 20, marginLeft: 121, flexDirection: 'row' }}>
                            {this.state.weightData.map((data, key) => {
                                return (
                                    <View key={key}>
                                        {this.state.checkedWeight == key ?
                                            <View style={{ flexDirection: 'row', marginRight: 20, width: 64 }}>
                                                <TouchableOpacity style={{ marginRight: 10 }}>
                                                    <Image source={assets.check_circle} />
                                                </TouchableOpacity>
                                                <Text style={styles.unit}>{data}</Text>

                                            </View>
                                            :
                                            <View style={{ flexDirection: 'row', marginRight: 20, width: 64 }}>
                                                <TouchableOpacity onPress={() => { this.setState({ checkedWeight: key }) }} style={{ marginRight: 10 }}>
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
                        <Text style={styles.title}>Goals</Text>
                        <View style={styles.divide}></View>

                        {this.state.goals.map((data, key) => {
                            return (
                                <View style={{ flexDirection: 'column' }}>
                                    <View key={key} style={{ marginVertical: 20 }}>
                                        <View style={{ flexDirection: 'row', marginRight: 20, }}>
                                            <TouchableOpacity style={{ marginRight: 20 }} onPress={() => { this.onchecked(key) }}>
                                                {data.checked ?
                                                    (<Image source={assets.check_square} />) : (<Image source={assets.uncheck_square} />)}
                                            </TouchableOpacity>
                                            <Text style={styles.unit}>{data.value}</Text>

                                        </View>
                                    </View>
                                    <View style={styles.divide}></View>

                                </View>
                            )
                        })}

                        <View style={{ height: 150 }}></View>
                    </View>


                </ScrollView>
            </View>



        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#141414',
        width: deviceWidth,
        flexDirection: 'column',
        paddingHorizontal: 20
    },
    title: {
        color: Color.White2,
        fontSize: 16,
        lineHeight: 20,
        fontWeight: '600',
        marginTop: 50,
        marginBottom: 20

    },
    container2: {
        marginVertical: 20,
        flexDirection: 'row',
    },
    container3: {
        flexDirection: 'row',
        width: 101,
        marginRight: 20
    },
    topic: {
        color: Color.White1,
        fontSize: 16,
        lineHeight: 20,
        fontWeight: '600',
        marginHorizontal: 20

    },
    unit: {
        color: Color.White1,
        fontSize: 16,
        lineHeight: 20,
        fontWeight: '400'
    },
    info: {
        color: Color.White2,
        fontSize: 16,
        lineHeight: 20,
        fontWeight: '400'
    },
    divide: {
        height: 1,
        backgroundColor: '#242424',
        width: deviceWidth - 40
    }

})

export default Profile;