import React from 'react';
import { View, Text } from 'react-native';
import { Color } from '../../../color';
import Button from '../../../components/Button';
import QuestionTemplate from '../QuestionTemplate';
import DateTimePicker from '@react-native-community/datetimepicker';


const WhatIsYourBirthday = ({ navigation, route = {params: {}}, onAction }) => {

    const [answer, setAnswer] = React.useState(new Date());
    return <QuestionTemplate onAction={onAction} questionTitle='What is your birthday?' navigation={navigation} questionNumber={2} totalQuestion={6} disabled={!answer}  route={route}>
        <View style={{flex:1, width:'100%', height:"100%"}}>
            <DateTimePicker 
                testID="dateTimePicker"
                value={answer}
                onChange={(e, value) => setAnswer(answer)}
                mode='date'
                display="spinner"
                themeVariant="dark"
            />
        </View>
    </QuestionTemplate>
}


export default WhatIsYourBirthday;