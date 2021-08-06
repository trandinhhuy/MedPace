import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Color } from '../../../color';
import Button from '../../../components/Button';
import QuestionTemplate from '../QuestionTemplate';
import DateTimePicker from '@react-native-community/datetimepicker';
import Ruler from '../../../components/Ruler';


const WhatIsYourWeight = ({ navigation, route = { params: {} }, onAction }) => {
    const [answer, setAnswer] = React.useState('');
    return <QuestionTemplate onAction={onAction} questionTitle='What is your weight?' navigation={navigation} questionNumber={4} totalQuestion={6} disabled={answer} route={route}>
        <View style={{  width: '100%', height: "100%", justifyContent:"center", alignItems:"center", transform: [
        //   { rotateZ: "45deg" }
        ] }}>
            <Ruler
                style={{ borderRadius: 0, elevation: 0}}
                width={400}
                height={Dimensions.get('window').width * 0.8}
                vertical={false}
                // onChangeValue={setAnswer}
                minimum={50}
                maximum={100}
                segmentWidth={2}
                segmentSpacing={10}
                indicatorColor={Color.Main1}
                indicatorWidth={180}
                indicatorHeight={150}
                indicatorBottom={0}
                step={10}
                stepColor='#333333'
                stepHeight={50}
                normalColor='#999999'
                normalHeight={20}
                backgroundColor={Color.Dark1}
                numberFontFamily='System'
                numberSize={40}
                numberColor={Color.White1}
                unit='kg'
                unitBottom={10}
                unitFontFamily='System'
                unitColor={Color.White2}
                unitSize={20}
            />
        </View>
    </QuestionTemplate>
}


export default WhatIsYourWeight;