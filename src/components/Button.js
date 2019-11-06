import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({onPress, children}) => {

    const {buttonStyle, buttonTextStyle} = style;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={buttonTextStyle}>{children}</Text>
        </TouchableOpacity>
    );
};

const style = {

    buttonTextStyle:{
        alignSelf: 'center',
        color:'#fff'
    },

    buttonStyle:{
        flex:1,
        alignSelf: 'stretch',
        backgroundColor: '#af3c59',
        borderRadius: 5,
        borderWidth:1,
        padding:10,
        borderColor: '#57232c'
    }
}

export default Button;