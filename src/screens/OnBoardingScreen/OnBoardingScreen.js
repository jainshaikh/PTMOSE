import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  ImageBackground,
  Pressable,
  onPress,
} from 'react-native';
import vineglass from '../../../assets/images/on_board_glass.png';
import bg_img from '../../../assets/images/onboard_background_pic.png';
import {useNavigation} from '@react-navigation/native';

const OnBoardingScreen = () => {
  const {height} = useWindowDimensions();

  const navigation = useNavigation();

  const onClickForHome = () => {
    navigation.navigate('UserProfileScreen');
  };

  return (
    <Pressable onPress={onClickForHome}>
      <View>
        <View style={styles.root}>
          <Image
            source={vineglass}
            resizeMode="contain"
            style={styles.wineglass}
          />
        </View>

        <View style={styles.background_image}>
          <ImageBackground source={bg_img} style={styles.stretch}>
            <View style={styles.text_front_bhimage}>
              <Text
                style={[
                  styles.textheading,
                  {
                    color: '#CDA15C',
                    fontSize: 35,
                    fontFamily: 'MontaguSlab_120pt-Light',
                  },
                ]}>
                Welcome!
              </Text>
              <Text style={styles.textbelowheading}>
                We are happy to see you. PTMOSE or Paperless Tasting Menu Order
                Ship & Events is the premier application for wine aficionados
                the world over.
              </Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#FFFFFF',
  },
  wineglass: {
    height: 83,
    width: 65,
    marginTop: 40,
    marginLeft: 30,
  },
  background_image: {
    backgroundColor: '#FFFFFF',
    height: '100%',
    paddingVertical: 10,
  },
  stretch: {
    width: '100%',
    height: '80%',
    resizeMode: 'stretch',
    marginTop: 20,
  },
  text_front_bhimage: {
    marginLeft: 20,
  },
  textbelowheading: {
    marginTop: 10,
    marginRight: 100,
    fontSize: 16,
    fontFamily: 'Inter-Regular',
  },
});

export default OnBoardingScreen;
