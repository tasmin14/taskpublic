import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const CustomButton = ({

    title,
    color,
    onClick
}) => {
    return (
        <TouchableOpacity
            onPress={() => {
                onClick();
            }}
            style={{
                backgroundColor: "#A3CFFF",
                borderRadius: 25,
                height: 50,
                width: '90%',
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 2,
                marginBottom: 15
            }}>
            <Text style={{ color, fontSize: 20, fontWeight: '600' }}>{title}</Text>

        </TouchableOpacity>
    )
}
export default CustomButton;
