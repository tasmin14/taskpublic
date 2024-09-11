import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useWindowDimensions } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import logo from '../assets/welcomelogo.png'
import topright from '../assets/Stopright.png'
import topleft from '../assets/topleft.png'
import buttomright from '../assets/Sbr.png'

const Splashscreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home');
        }, 2000);
    }, [])
    const { height, width } = useWindowDimensions();

    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: 'row',
                alignSelf: 'flex-start',
                width: '100%',
                alignItems: 'flex-start',
                justifyContent: 'flex-start'
            }}>
                <Image
                    source={topleft}
                    style={styles.topleft}
                />
                <Image
                    source={topright}
                    style={styles.topright}
                />
            </View>
            <View style={styles.imageContainer}>
                <Image
                    source={logo}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>
            <View style={{
                flexDirection: 'row',
                alignSelf: 'flex-end',
                width: '100%',
                flex: 1
            }}>
                <Image
                    source={buttomright}
                    style={styles.buttomright}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    logo: {
        marginTop: hp('1%'),
        width: 370,
        alignSelf: 'center'
    },
    topright: {
        alignSelf: 'flex-end',
    },
    topleft: {
        alignSelf: 'flex-start'
    },
    buttomright: {
        alignSelf: 'flex-end',
        marginLeft: hp('14%')
    }
});
export default Splashscreen;