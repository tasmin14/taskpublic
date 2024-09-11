import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import signlogo from '../assets/signlogo.png'
import CustomButton from '../components/button';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Logout = ({ navigation, route }) => {
    const { name } = route.params;
    return (
        <View style={styles.container}>

            <View style={styles.logoContainer}>
                <Image
                    source={signlogo}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.textcontainer}>
                <Text style={styles.text}>Welcome,{name}</Text>
            </View>
            <CustomButton
                title={"Logout"}
                bgcolor={"#A3CFFF"}
                color={'black'}
                onClick={() => {

                    console.log('tap')
                    navigation.navigate('Home');
                }}
            />
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: wp('8%'),
        paddingVertical: wp('8%'),
        paddingBottom: wp('50%')
    },

    text: {
        fontSize: 35,
        fontWeight: '800',
        color: 'black'
    }
})

export default Logout;