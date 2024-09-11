import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, BackHandler, Alert } from 'react-native';
import { useWindowDimensions } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CustomButton from '../components/button';
import logo from '../assets/welcomelogo.png'
import topright from '../assets/Maskgroup.png'
import topleft from '../assets/topleft.png'


const Welcome = ({ navigation }) => {
    const { height, width } = useWindowDimensions();
    const backAction = () => {
        Alert.alert(
            'Hold on!',
            'Are you sure you want to exit?',
            [
                {
                    text: 'Cancel',
                    onPress: () => null,
                    style: 'cancel',
                },
                { text: 'YES', onPress: () => BackHandler.exitApp() },
            ]
        );
        return true;
    };

    useEffect(() => {
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction
        );

        return () => backHandler.remove();
    }, []);


    return (
        <View style={styles.container}>

            <View style={{
                flexDirection: 'row',
                flex: 1,
            }}>
                <Image
                    source={topleft}
                    style={styles.topleft}
                    resizeMode="contain"
                />

                <Image
                    source={topright}
                    style={styles.topright}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.imageContainer}>

                <Image
                    source={logo}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>

            <Text style={styles.tagline}>
                Sparkle & Shine Transform Your Drive with Every Wash!
            </Text>
            <CustomButton
                title={"Let's Started"}
                color={'black'}
                onClick={() => {
                    console.log('tap')
                    navigation.navigate('Signup');
                }}

            />

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Signin');
                }}>
                <Text style={styles.signInText}>
                    Already have an account? <Text style={styles.signInLink}>Sign in</Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    imageContainer: {

        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        marginTop: hp('10%'),
        width: 370,
        height: 300
    },

    topright: {
        alignSelf: 'flex-end',
        marginTop: 10
    },
    topleft: {
        alignSelf: 'flex-start'
    },

    tagline: {
        fontSize: hp('3%'),
        textAlign: 'center',
        color: '#666',
        marginBottom: hp('10%'),
        marginTop: hp('1%'),
        paddingHorizontal: wp('12%'),
        fontWeight: '500',
    },
    startButton: {
        backgroundColor: '#00A1FF',
        borderRadius: wp('5%'),
        paddingVertical: hp('1.8%'),
        paddingHorizontal: wp('25%'),
        marginBottom: hp('2%'),
    },
    buttonText: {
        color: '#fff',
        fontSize: hp('2.2%'),
        fontWeight: 'bold',
        textAlign: 'center',
    },
    signInText: {
        fontSize: hp('1.8%'),
        color: '#666',
        marginBottom: hp('8%')

    },
    signInLink: {
        color: '#00A1FF',
        fontWeight: 'bold',
    },
});
export default Welcome;
