
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
} from 'react-native';
import signlogo from '../assets/signlogo.png';
import { Checkbox } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Input from '../components/input';
import CustomButton from '../components/button';
//test
const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [errors, setErrors] = useState({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateFields = () => {
    let valid = true;
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    if (!email.trim() || !emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    }
    if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
      valid = false;
    }
    if (!checked) {
      newErrors.checked = ' You must agree to the terms and conditions';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSignup = async () => {
    if (!validateFields()) {
      return;
    }

    try {
      const response = await fetch('https://tor.appdevelopers.mobi/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });

      if (!response.ok) {

        navigation.navigate('Signup', { name: name });
      }

      const data = await response.json();


      navigation.navigate('Signin', { name: name });
      console.log('Signup successful:', data);

    } catch (error) {

      console.log('Signup error:', error);
      navigation.navigate('Signin', { name: name });
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='white' />
      <View style={styles.logoContainer}>
        <Image
          source={signlogo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.heading}>Sign Up</Text>
        <Text style={styles.subHeading}>
          Fill in the below form and add life to your car!
        </Text>

        <Input
          label="Name"
          placeholder="Enter your Name"
          value={name}
          onChangeText={setName}
          iconName="user"
          keyboardType="default"
        />
        {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

        <Input
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          iconName="envelope"
          keyboardType="email-address"
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

        <Input
          label="Password"
          placeholder="Enter your Password"
          value={password}
          onChangeText={setPassword}
          iconName="lock"
          secureTextEntry={true}
        />
        {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
      </View>
      <View style={styles.termscontainer}>
        <View style={styles.checkboxContainer}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => setChecked(!checked)}
          />
          <Text style={styles.termsText}>
            Agree with <Text style={styles.footerText}>Terms & Conditions</Text>
          </Text>
        </View>
        {errors.checked && <Text style={styles.errorText}>{errors.checked}</Text>}
      </View>
      <CustomButton
        title="Sign up"
        bgcolor="#A3CFFF"
        color="black"
        onClick={handleSignup}
      />

      <View style={styles.signupContainer}>
        <Text>Already have an account? </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Signin')}
        >
          <Text style={styles.link}>Sign In</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footerText}>
        By login or sign up, you agree to our{' '}
        <Text style={styles.footerText}>terms of use</Text> and{' '}
        <Text style={styles.footerText}>privacy policy</Text>
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
  formContainer: {
    marginTop: hp('2%'),
    alignSelf: 'flex-start',
  },
  heading: {
    fontSize: hp('4%'),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: hp('1%'),
    alignSelf: 'flex-start',
    color: 'black',
  },
  subHeading: {
    fontSize: hp('2%'),
    color: '#777',
    textAlign: 'center',
    marginBottom: hp('2%'),
  },
  termscontainer: {
    width: '100%',
  },
  checkboxContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  termsText: {
    fontSize: hp('1.8%'),
    color: 'black',
    fontWeight: 'bold',
  },
  link: {
    color: 'black',
    fontWeight: 'bold',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: hp('2%'),
  },
  footerText: {
    textAlign: 'center',
    fontSize: hp('1.8%'),
    color: '#777',
  },
  errorText: {
    color: 'red',
    fontSize: hp('1.6%'),
    marginBottom: hp('1%'),
    marginTop: hp('0.5%'),

    alignSelf: 'flex-start'

  },
});

export default SignupScreen;
