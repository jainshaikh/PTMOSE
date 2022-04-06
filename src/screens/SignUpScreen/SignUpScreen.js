import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Pressable,
  onPress,
} from 'react-native';
import Logo2 from '../../../assets/images/Logo2.png';
import facebook_connect_btn from '../../../assets/images/connect_facebook.png';
import google_connect_btn from '../../../assets/images/connect_google.png';
import MiniArrow from '../../../assets/images/mini_arrow_shack.png';
import CustomInput from '../../components/CustomInput/CustomInput';

import {useNavigation} from '@react-navigation/native';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const navigation = useNavigation();

  const {height} = useWindowDimensions();

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassScreen');
  };

  const onPressGoogleBtn = () => {
    console.warn('onPressGoogleBtn');
  };

  const onPressFacebookBtn = () => {
    console.warn('onPressFacebookBtn');
  };
  const onLoginPress = () => {
    navigation.navigate('SignInScreen');
  };

  const onRegBtnPress = () => {
    navigation.navigate('SignInScreen');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <View style={styles.main}>
          <View style={styles.head}>
            <Image
              source={Logo2}
              style={[styles.logo, {height: height * 0.15}]}
              resizeMode="contain"
            />
          </View>

          <Text
            style={{
              color: '#CDA15C',
              fontSize: 35,
              fontFamily: 'MontaguSlab_120pt-Light',
            }}>
            Sign Up
          </Text>

          <CustomInput
            placeholder="EMAIL ADDRESS"
            values={email}
            setValues={setEmail}
            setsource={require('../../../assets/images/mail_tag.png')}
          />

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
            setsource={require('../../../assets/images/lock_2.png')}
          />

          <CustomInput
            placeholder="CONFORM PASSWORD"
            values={passwordRepeat}
            setValues={setPasswordRepeat}
            secureTextEntry={true}
            setsource={require('../../../assets/images/lock_2.png')}
          />

          <Pressable onPress={onRegBtnPress}>
            <View style={styles.RegButton}>
              <Text style={styles.RegButtonText}>REGISTER</Text>
            </View>
          </Pressable>

          <Text
            style={{
              color: '#3F0321',
              fontFamily: 'Inter-Bold',
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

          <View style={styles.loginHere}>
            <Text
              style={{
                color: '#3F0321',
                fontWeight: 'bold',
                fontSize: 16,
                fontFamily: 'Inter-Bold',
                textAlign: 'left',
              }}>
              ALREADY HAVE AN ACCOUNT?
            </Text>

            <View style={styles.loginBtn}>
              <View style={styles.loginBtnText}>
                <Text
                  style={{
                    color: '#CDA15C',
                    fontSize: 35,
                    fontFamily: 'MontaguSlab_120pt-Light',
                  }}
                  onPress={onLoginPress}>
                  Login
                </Text>
              </View>

              <View style={styles.loginBtnArrow}>
                <Pressable onPress={onLoginPress}>
                  <Image
                    source={MiniArrow}
                    style={styles.arrowBtn}
                    onPress={onLoginPress}></Image>
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
    backgroundColor: '#3F0321',
    alignItems: 'center',
  },
  head: {
    alignItems: 'center',
  },
  logo: {
    width: 219.1,
    height: 43.28,
    maxWidth: 300,
    maxHeight: 200,
    display: 'flex',
    alignItems: 'center',
  },
  main: {
    paddingHorizontal: 25,
    flexDirection: 'column',
    backgroundColor: 'white',
    fontSize: 35,
    height: '100%',
    width: '100%',
  },
  RegButton: {
    backgroundColor: '#3F0321',
    height: 62,
    width: '100%',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  RegButtonText: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    color: '#ffffff',
    padding: 15,
    letterSpacing: 1,
  },
  cnt_btn: {
    //   marginTop: 35,
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
  loginHere: {
    marginBottom: 50,
  },
  loginBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginBtnArrow: {},
  arrowBtn: {
    marginLeft: 30,
    height: 15,
    width: 9,
  },
});
export default SignUpScreen;
