import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import signlogo from '../assets/signlogo.png';
import CustomButton from '../components/button';
import Input from '../components/input';

const SignInScreen = ({ navigation, route }) => {
    const { name } = route.params;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const validatePassword = (password) => {
        return password.length >= 6;
    };

    const handleLogin = async () => {
        setEmailError('');
        setPasswordError('');

        if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address');
            return;
        }
        if (!validatePassword(password)) {
            setPasswordError('Password must be at least 6 characters');
            return;
        }

        try {
            const response = await fetch("https://tor.appdevelopers.mobi/api/register", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                })
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            console.log('Login successful:', data);

            navigation.navigate('Logout', { name: name });

        } catch (error) {
            console.log('Login error:', error);
            navigation.navigate('Logout', { name: name });
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={signlogo}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Sign In</Text>
                <Text style={styles.subtitle}>Hi! Welcome back, you have been missed</Text>
            </View>

            <View style={styles.inputContainer}>
                <Input
                    label="Email"
                    placeholder="Enter your email"
                    value={email}
                    onChangeText={(text) => {
                        setEmail(text);
                        if (emailError) setEmailError('');
                    }}
                    iconName="envelope"
                    keyboardType="email-address"
                />
                {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

                <Input
                    label="Password"
                    placeholder="Enter your Password"
                    value={password}
                    onChangeText={(text) => {
                        setPassword(text);
                        if (passwordError) setPasswordError('');
                    }}
                    iconName="lock"
                    secureTextEntry={true}
                />
                {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
            </View>

            <TouchableOpacity>
                <Text style={styles.forgotPasswordText}>Forgot password?</Text>
            </TouchableOpacity>

            <CustomButton
                title={"Sign In"}
                bgcolor={"#A3CFFF"}
                color={'black'}
                onClick={handleLogin}
            />

            <View style={styles.dividerContainer}>
                <View style={styles.divider} />
                <Text style={styles.orText}>or</Text>
                <View style={styles.divider} />
            </View>

            <View style={styles.iconContainer}>
                <TouchableOpacity style={styles.iconButtons}>
                    <AntDesign name="google" color={'black'} size={25} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButtons}>
                    <AntDesign name="apple1" color={'black'} size={25} />
                </TouchableOpacity>
            </View>

            <TouchableOpacity>
                <View style={styles.signUpContainer}>
                    <Text style={styles.signUpText}>
                        Don't have an account? <Text style={styles.signUpLink}>Sign Up</Text>
                    </Text>
                </View>
            </TouchableOpacity>

            <Text style={styles.termsText}>
                By login or sign up, you agree to our terms of use and privacy policy.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: wp('8%'),
        paddingVertical: wp('8%'),
    },
    logoContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: wp('50%'),
        height: hp('20%'),
    },
    titleContainer: {
        alignSelf: 'flex-start',
    },
    title: {
        fontSize: hp('3%'),
        fontWeight: 'bold',
        color: '#000',
        marginBottom: hp('1%'),
    },
    subtitle: {
        fontSize: hp('2%'),
        color: '#666',
        marginBottom: hp('3%'),
    },
    inputContainer: {
        width: '100%',
    },
    errorText: {
        color: 'red',
        fontSize: hp('1.6%'),
        marginBottom: hp('2%'),
    },
    forgotPasswordText: {
        alignSelf: 'flex-end',
        color: 'black',
        fontWeight: '600',
        fontSize: hp('2%'),
        marginBottom: hp('1%'),
        marginTop: hp('1%'),
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: hp('1.5%'),
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: '#A3CFFF',
    },
    orText: {
        marginHorizontal: wp('3%'),
        color: '#666',
        fontSize: hp('1.8%'),
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
    },
    iconButtons: {
        padding: 10,
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#A3CFFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        backgroundColor: 'white',
    },
    signUpText: {
        color: '#666',
        fontSize: hp('1.8%'),
    },
    signUpLink: {
        color: 'black',
        fontWeight: 'bold',
    },
    termsText: {
        textAlign: 'center',
        color: '#808080',
        fontSize: hp('1.6%'),
        marginTop: hp('1.5%'),
        paddingHorizontal: wp('5%'),
        paddingBottom: wp('7%'),
    },
});

export default SignInScreen;

