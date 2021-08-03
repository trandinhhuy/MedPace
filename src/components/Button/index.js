import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Color } from '../../color';

const Button = ({
    onPress = () => { },
    variant = 'primary', // 'primary' | 'basic'
    ...props
}) => {
    return <TouchableOpacity activeOpacity={0.9} style={{ 
        padding: 20, 
        margin:10,
        borderRadius:15,
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: variant == 'primary' ? Color.Main1 : Color.Background }} 
        onPress={onPress}
    {...props}>
        <Text style={{  color: variant == 'primary' ? Color.Dark1 : Color.White1 }}>{props.children}</Text>
    </TouchableOpacity>
}


export default Button;