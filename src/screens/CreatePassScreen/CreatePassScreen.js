import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  Pressable,
  onPress,
} from 'react-native';
import Logo from '../../../assets/images/Logo.png';
import CustomInput from '../../components/CustomInput/CustomInput';

import {useNavigation} from '@react-navigation/native';

const CreatePassScreen = () => {
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const {height} = useWindowDimensions();

  const navigation = useNavigation();
  const onSendCodeBtnPress = () => {
    navigation.navigate('SignInScreen');
  };
  return (
    <View style={styles.main}>
      <View style={styles.head}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.25}]}
          resizeMode="contain"
        />
      </View>

      <View style={styles.body}>
        <View style={styles.ForgPass}>
          <Text
            style={{
              color: '#CDA15C',
              fontSize: 35,
              fontFamily: 'MontaguSlab_120pt-Light',
              marginTop: 20,
            }}>
            CREATE PASSWORD
          </Text>
          <CustomInput
            placeholder="NEW PASSWORD"
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

          <Pressable onPress={onSendCodeBtnPress}>
            <View style={styles.sendCodeButton}>
              <Text style={styles.sendCodeButtonText}>CREATE PASSWORD</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CreatePassScreen;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#FFFFFF',
    height: '100%',
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
  body: {
    marginHorizontal: 20,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  ForgPass: {},
  sendCodeButton: {
    backgroundColor: '#3F0321',
    height: 62,
    width: '100%',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    marginBottom: -8,
  },
  sendCodeButtonText: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    color: '#ffffff',
    padding: 15,
    letterSpacing: 1,
  },
  text_dec: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#939393',
    opacity: 0.8,
    marginTop: 25,
  },
  signupHere: {
    marginBottom: 50,
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
