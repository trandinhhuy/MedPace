import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Color } from '../../color';

const Button = ({
    onPress,
    disabled = false,
    variant = 'primary', // 'primary' | 'basic' | 'outlined'
    style = {},
    ...props
}) => {
    return <TouchableOpacity
        activeOpacity={disabled ? 1 : 0.9}
        style={{
            padding: 20,
            marginHorizontal: 10,
            marginVertical: 5,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: variant == 'outlined' ? Color.Main1 : "transparent",
            backgroundColor: variant == 'primary' ? Color.Main1 : (variant == 'outlined' ? Color.Dark1 : Color.Dark2),
            ...style,
        }}
        onPress={onPress}
        {...props}>
        <Text style={{ color: variant == 'primary' ? Color.Dark2 : Color.White1 }}>{props.children}</Text>
    </TouchableOpacity>
}


export default Button;