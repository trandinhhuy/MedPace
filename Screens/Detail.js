import * as React from 'react'

import { 
    View,
    Text 
} from 'react-native';


const DetailScreen = ({navigation}) => {
    return (
        <View style = {{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text> this is Detail Screen</Text>
            <Text> another text</Text>
        </View>
    )
}

export default DetailScreen;