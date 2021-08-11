import React from 'react';
import { View, Text } from 'react-native';
import { Color } from '../../../color';
import Button from '../../../components/Button';
import QuestionTemplate from '../QuestionTemplate';

const WhatIsYourgender = ({ navigation, route = {params: {}}, onAction }) => {
    const [answer, setAnswer] = React.useState('');
    return <QuestionTemplate onAction={onAction} questionTitle='What is your gender?' navigation={navigation} questionNumber={1} totalQuestion={6} disabled={!answer}  route={route}>
        <View style={{flex:1, width:'100%', height:"100%"}}>
            <Button onPress={() => setAnswer('Male')}  variant={answer == 'Male' ? 'outlined': 'basic'}> Male</Button>
            <Button onPress={() => setAnswer('Female')} variant={answer == 'Female' ? 'outlined': 'basic'}> Female</Button>
        </View>
    </QuestionTemplate>
}


export default WhatIsYourgender;