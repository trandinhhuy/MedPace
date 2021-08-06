import React from 'react';
import { View, Text } from 'react-native';
import { Color } from '../../../color';
import Button from '../../../components/Button';
import QuestionTemplate from '../QuestionTemplate';

const Sync = ({ navigation, route = {params: {}}, onAction }) => {
    const [answer, setAnswer] = React.useState('');
    return <QuestionTemplate onAction={onAction} questionTitle="You're all set, sync with?" actionTitle='Finish' navigation={navigation} questionNumber={6} totalQuestion={6} disabled={false}  route={route}>
        <View style={{flex:1, width:'100%', height:"100%"}}>
            <Button onPress={() => setAnswer('Male')}  variant={answer == 'Male' ? 'outlined': 'basic'}> Apple Health</Button>
            <Button onPress={() => setAnswer('Female')} variant={answer == 'Female' ? 'outlined': 'basic'}> Google Fit</Button>
        </View>
    </QuestionTemplate>
}


export default Sync;