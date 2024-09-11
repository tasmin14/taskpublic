import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomInputText = ({
    label,
    placeholder,
    value,
    onChangeText,
    iconName,
    secureTextEntry,
    keyboardType = 'default',
    style = {},
    ...props
}) => {
    return (
        <View style={[styles.inputContainer, style]}>
            {label && <Text style={styles.label}>{label}</Text>}
            <View style={styles.inputWrapper}>
                {iconName && (
                    <Icon name={iconName} size={20} color="#666" style={styles.icon} />
                )}
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    {...props}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 0,
    },
    label: {
        fontSize: 16,
        color: '#333',
        marginBottom: 5,
        fontWeight: 'bold',
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        borderColor: '#808080',
        borderRadius: 8,
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 1,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
});

export default CustomInputText;
