import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { Card, Avatar } from 'react-native-paper';
import * as Progress from 'react-native-progress';

//import Typography from '../components/Typography';

const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
};

const Schedule: React.FC = () => {
    const [items, setItems] = useState({});

    const loadItems = (day) => {
        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = timeToString(time);
                if (!items[strTime]) {
                    items[strTime] = [];
                    const numItems = Math.floor(Math.random() * 3 + 1);
                    for (let j = 0; j < numItems; j++) {
                        items[strTime].push({
                            name: 'Goal for ' + strTime + ' #' + j,
                            height: Math.max(50, Math.floor(Math.random() * 150)),
                            paceHourGoal: Math.floor(Math.random() * 24) + 0,
                            paceMinGoal: Math.floor(Math.random() * 60) + 0,
                            paceHourProgr: Math.floor(Math.random() * 24) + 0,
                            paceMinProgr: Math.floor(Math.random() * 60) + 0,
                            caloGoal: Math.floor(Math.random() * 10000) + 1,
                            caloProgr: Math.floor(Math.random() * 10000) + 1,
                            distanceGoalKm: Math.floor(Math.random() * 100) + 1,
                            distanceGoalM: Math.floor(Math.random() * 10) + 0,
                            distanceProgrKm: Math.floor(Math.random() * 100) + 1,
                            distanceProgrM: Math.floor(Math.random() * 10) + 0,
                            stepGoal: Math.floor(Math.random() * 15000) + 1000,
                            stepProgr: Math.floor(Math.random() * 15000) + 1000,
                        });
                    }
                }
            }
            const newItems = {};
            Object.keys(items).forEach((key) => {
                newItems[key] = items[key];
            });
            setItems(newItems);
        }, 1000);
    };

    const renderItem = (item) => {
        return (
            <TouchableOpacity style={{ marginRight: 10, marginTop: 17 }}>
                <Card>
                    <Card.Content>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                            <Text style={styles.GoalTypeTitle}>{item.name}</Text>
                            <Avatar.Text label="T" />
                        </View>
                        <Text>6:30</Text>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.GoalTypeTitle}>Pace</Text>
                            <View>
                                <Text style={styles.progress}>{item.paceHourProgr + ':' + item.paceMinProgr + '/' + item.paceHourGoal + ':' + item.paceMinProgr}</Text>
                            </View>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{}}>min/km</Text>
                            <View style={{ marginVertical: 6 }}>
                                <Progress.Bar progress={(item.paceHourProgr * 60 + item.paceMinProgr) / (item.paceHourGoal * 60 + item.paceMinGoal)} width={200} color={'green'} />
                            </View>

                        </View>

                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.GoalTypeTitle}>Calories</Text>
                            <Text style={styles.progress}>{item.caloProgr + '/' + item.caloGoal}</Text>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{}}>kcal</Text>
                            <View style={{ marginVertical: 6 }}>
                                <Progress.Bar progress={item.caloProgr / item.caloGoal} width={200} color={'green'} />
                            </View>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.GoalTypeTitle}>Distance</Text>
                            <Text style={styles.progress}>{item.distanceProgrKm + ',' + item.distanceGoalM + '/' + item.distanceGoalKm + ',' + item.distanceGoalM}</Text>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{}}>km</Text>
                            <View style={{ marginVertical: 6 }}>
                                <Progress.Bar progress={(item.distanceProgrKm * 10 + item.distanceProgrM) / (item.distanceGoalKm * 10 + item.distanceGoalM)} width={200} color={'green'} />
                            </View>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.GoalTypeTitle}>Step</Text>
                            <Text style={styles.progress}>{item.stepProgr + ':' + item.stepGoal}</Text>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{}}>steps</Text>
                            <View style={{ marginVertical: 6 }}>
                                <Progress.Bar progress={item.stepProgr / item.stepGoal} width={200} color={'green'} />
                            </View>
                        </View>
                    </Card.Content>
                </Card >
            </TouchableOpacity >
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <Agenda
                items={items}
                loadItemsForMonth={loadItems}
                selected={'2021-08-15'}
                renderItem={renderItem}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#eaeaea"
    },
    title: {
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        backgroundColor: "#61dafb",
        color: "#20232a",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
    },

    GoalTypeTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    progress: {
        fontSize: 15,
        fontWeight: 'bold'
    }
});

export default Schedule;