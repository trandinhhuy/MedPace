import React from 'react'
import { 
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';
import { StyleSheet } from 'react-native';
import { useEffect } from 'react';
import {Color} from '../../color';
import _BackgroundTimer from 'react-native-background-timer';
import { useState } from 'react';
import { Dimensions } from 'react-native';
const deviceWidth = Dimensions.get('window').width
const PlantScreen = () => {
    const flatListRef = React.useRef()
    const resetItem = [
        {name: 'day'}, 
        {name: 'week'},
        {name: 'month'}
    ]
    const [item, setItem] = React.useState([
        {name: 'day'}, 
        {name: 'week'},
        {name: 'month'}
    ])

    function toTop(){
        flatListRef.current.scrollToOffset({ animated: true, offset: 0 })
    }
    function renderItem ({item}){
        return (
            <View style = {{
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            <Text style = {{
                paddingHorizontal: 20,
                alignSelf: 'center',
                width: 280,
                justifyContent:'center',
                alignItems: 'center',
                textAlign: 'center'
            }}>{item.name}</Text>
            </View>
        )
    }
    return (
        <View style = {{
            alignItems: 'center',
            justifyContent: 'center',
            width: 300,
        }}>
            <FlatList
            horizontal
            pagingEnabled = {true}
            ref = {flatListRef}
            showsHorizontalScrollIndicator = {false}
            data = {item}
            keyExtractor = {(item) => item.name}
            renderItem = {renderItem}
            contentContainerStyle = {{
                flexDirection: 'row',
            }}
            style = {{
                width: 280,
                height: 50,
                alignSelf: 'center',
                marginHorizontal: 20,
                borderWidth: 1,
                borderRadius: 40,
            }}
            />
            <TouchableOpacity onPress = {() => {
                toTop()
            }}>
                <Text>reset</Text>
            </TouchableOpacity>
        </View>
        
    )
}

export default PlantScreen;