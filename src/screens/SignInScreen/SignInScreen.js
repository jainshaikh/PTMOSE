import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  Pressable,
  onPress,
  ScrollView,
} from 'react-native';
import Logo from '../../../assets/images/Logo.png';
import facebook_connect_btn from '../../../assets/images/connect_facebook.png';
import google_connect_btn from '../../../assets/images/connect_google.png';
import MiniArrow from '../../../assets/images/mini_arrow_shack.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

import {useNavigation} from '@react-navigation/native';
const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {height} = useWindowDimensions();

  const navigation = useNavigation();

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassScreen');
  };

  const onLoginBtnPress = () => {
    //Validate
    navigation.navigate('OnBoardingScreen');
  };

  const onPressSignUpBtn = () => {
    navigation.navigate('SignUpScreen');
  };

  const onPressGoogleBtn = () => {
    console.warn('onPressGoogleBtn');
  };

  const onPressFacebookBtn = () => {
    console.warn('onPressFacebookBtn');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <View style={styles.head}>
          <Image
            source={Logo}
            style={[styles.logo, {height: height * 0.24}]}
            resizeMode="contain"
          />
        </View>

        <View style={styles.main}>
          <Text
            style={{
              color: '#CDA15C',
              fontSize: 35,
              fontFamily: 'MontaguSlab_120pt-Light',
              marginTop: 20,
              fontWeight: '400',
            }}>
            Login
          </Text>
          <CustomInput
            placeholder="USERNAME"
            values={username}
            setValues={setUsername}
            setsource={require('../../../assets/images/profile_close_1.png')}
          />
          <CustomInput
            placeholder="PASSWORD"
            values={password}
            setValues={setPassword}
            secureTextEntry={true}
            setsource={require('../../../assets/images/eye_2.png')}
          />
          <Pressable onPress={onLoginBtnPress}>
            <View style={styles.loginButton}>
              <Text style={styles.loginButtonText}>LOGIN</Text>
            </View>
          </Pressable>

          <CustomButton
            text="FORGET PASSWORD?"
            onPress={onForgotPasswordPressed}
            type="TERTIARY"
            style={styles.frgtpassbtn}
          />
          <Text
            style={{
              fontFamily: 'Inter-Bold',
              color: '#3F0321',
              fontSize: 16,
              textAlign: 'left',
            }}>
            OR USE:
          </Text>
          <View style={styles.cnt_btn}>
            <Pressable onPress={onPressGoogleBtn}>
              <Image
                source={google_connect_btn}
                style={[styles.ggl_btn]}
                resizeMode="contain"
                onPress={onPressGoogleBtn}
              />
            </Pressable>

            <Pressable onPress={onPressFacebookBtn}>
              <Image
                source={facebook_connect_btn}
                style={[styles.fb_btn]}
                resizeMode="contain"
              />
            </Pressable>
          </View>

          <View style={styles.signupHere}>
            <Text
              style={{
                color: '#3F0321',
                fontWeight: 'bold',
                fontSize: 16,
                fontFamily: 'Inter-Bold',
                textAlign: 'left',
              }}>
              NEW HERE?
            </Text>

            <View style={styles.signUpBtn}>
              <View style={styles.signUpBtnText}>
                <Text
                  style={{
                    color: '#CDA15C',
                    fontSize: 35,
                    fontFamily: 'MontaguSlab_120pt-Light',
                  }}
                  onPress={onPressSignUpBtn}>
                  Sign Up
                </Text>
              </View>

              <View style={styles.signUpBtnArrow}>
                <Pressable onPress={onPressSignUpBtn}>
                  <Image
                    source={MiniArrow}
                    style={styles.arrowBtn}
                    onPress={onPressSignUpBtn}
                  />
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    fontFamily: 'MontaguSlab_120pt-Regular',
    backgroundColor: '#3F0321',
  },
  head: {
    alignItems: 'center',
    backgroundColor: '#3F0321',
  },
  logo: {
    width: '55%',
    maxWidth: 300,
    maxHeight: 200,
  },
  main: {
    paddingHorizontal: 20,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: '#ffffff',
    height: '100%',
  },
  loginButton: {
    backgroundColor: '#3F0321',
    height: 62,
    width: '100%',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    marginBottom: -8,
  },
  loginButtonText: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    color: '#ffffff',
    padding: 15,
    letterSpacing: 1,
  },
  // frgtpassbtn: {
  //   margin: 50,
  // },
  cnt_btn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 50,
  },
  ggl_btn: {
    width: 70,
    height: 70,
    marginHorizontal: 10,
  },
  fb_btn: {
    width: 70,
    height: 70,
    marginHorizontal: 10,
  },
  signupHere: {
    // marginBottom: 50,
  },
  signUpBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signUpBtnArrow: {},
  arrowBtn: {
    marginLeft: 30,
    height: 15,
    width: 9,
  },
});
export default SignInScreen;
