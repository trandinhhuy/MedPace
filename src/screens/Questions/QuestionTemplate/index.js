import React, { useLayoutEffect } from 'react';
import { View, Text } from 'react-native';
import { Color } from '../../../color';
import Button from '../../../components/Button';

const QuestionTemplate = ({ navigation, route, questionTitle, children, disabled, questionNumber, totalQuestion, onAction = () => {}, ...props }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle:''
        })
    }, [navigation])
    return <View style={{flex:1, backgroundColor: Color.Dark1}}>
        <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
            <Text style={{color: Color.Main1}}>{questionNumber} / {totalQuestion}</Text>
            <Text style={{ fontSize:20, color: Color.White1}}>{questionTitle}</Text>
        </View>
        <View style={{flex:4, justifyContent:"center", alignItems:"center"}}>
            {children}
        </View>
        <View style={{flex:2, justifyContent:"center", alignItems:"stretch"}}>
            <Button disabled={disabled} onPress={() => { !disabled && onAction()}} variant={!disabled ? 'primary' : 'basic'}>Next</Button>
        </View>
    </View>
}


export default QuestionTemplate;