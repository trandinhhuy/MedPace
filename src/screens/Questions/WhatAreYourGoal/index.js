import React from 'react';
import { View, Text } from 'react-native';
import { Color } from '../../../color';
import Button from '../../../components/Button';
import QuestionTemplate from '../QuestionTemplate';

const WhatAreYourGoal = ({ navigation, route = {params: {}}, onAction }) => {
    const [answer, setAnswer] = React.useState({
        loseweight: false,
        getinshape: false,
        buildmycardio: false,
        improveperformance: false,
        justforfun: false
    });
    return <QuestionTemplate onAction={onAction} questionTitle='What are your goals?' navigation={navigation} questionNumber={5} totalQuestion={6} disabled={!answer}  route={route}>
        <View style={{flex:1, width:'100%', height:"100%"}}>
            <Button onPress={() => setAnswer({
                ...answer,
                loseweight: !answer.loseweight
            })}  variant={answer.loseweight ? 'outlined': 'basic'}>lose weight</Button>
            <Button onPress={() => setAnswer({
                ...answer,
                getinshape: !answer.getinshape
            })}  variant={answer.getinshape ? 'outlined': 'basic'}>get in shape</Button>
            <Button onPress={() => setAnswer({
                ...answer,
                buildmycardio: !answer.buildmycardio
            })}  variant={answer.buildmycardio ? 'outlined': 'basic'}>build my cardio</Button>
            <Button onPress={() => setAnswer({
                ...answer,
                improveperformance: !answer.improveperformance
            })}  variant={answer.improveperformance ? 'outlined': 'basic'}>improve my performance</Button>
            <Button onPress={() => setAnswer({
                ...answer,
                justforfun: !answer.justforfun
            })}  variant={answer.justforfun ? 'outlined': 'basic'}>just for fun</Button>
        </View>
    </QuestionTemplate>
}


export default WhatAreYourGoal;