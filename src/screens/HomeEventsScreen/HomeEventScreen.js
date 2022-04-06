import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList, 
  Animated, 
  TouchableOpacity, 
  useWindowDimensions, 
  Image, 
  ImageBackground,
  ScrollView } from 'react-native'
import React, { useState, useRef} from 'react';
import Logo3 from '../../../assets/images/Logo3.png';
import HeaderMenuBtn from '../../../assets/images/HeaderMenuBtn.png';
import home_btn from '../../../assets/images/HeaderHomeBtn.png';
import location from '../../../assets/images/LocationLogo.png';
import search_btn from '../../../assets/images/search_btn.png';
import onboard_background_pic from '../../../assets/images/WineryProfileHeadPic.png';
import LocationBoxImg from '../../../assets/images/LocationBoxImg.png';
import LocImgGredient from '../../../assets/images/LocImgGredient.png';
import MiniArrow from '../../../assets/images/miniArrowThemClr.png';
import FeaturedEventCrousel from './FeatureEventsCrousel/FeaturedEventsCrousel';

const HomeEventScreen = () => {
  const {height} = useWindowDimensions();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    
    <ScrollView>
    <View style={styles.root}>
      <View style={styles.head}>
        <Image
          source={HeaderMenuBtn}
          style={{height: 9.07, width: 9.07, marginHorizontal: 15}}></Image>
        <Image
          source={Logo3}
          style={[styles.logo, {height: height * 0.15}]}
          resizeMode="contain"
        />
        <Image
          source={home_btn}
          style={{height: 16, width: 16, marginHorizontal: 15}}></Image>
      </View>

      <View>
        <Text
          style={{
            marginHorizontal: 20,
            fontSize: 15,
            color: '#3F0321',
            fontFamily: 'Inter-Bold',
          }}>
          HELLO,
        </Text>
        <View
          style={{
            alignItems: 'center',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              marginHorizontal: 20,
              fontSize: 35,
              color: '#CDA15C',
              fontFamily: 'MontaguSlab_120pt-Light',
              paddingBottom: 30,
            }}>
            Paul Wilkins
          </Text>
          <Image
            source={search_btn}
            style={{height: 18, width: 18, marginHorizontal: 15}}></Image>
        </View>
      </View>

      <View style={styles.body}>
      
        <View style={styles.innerbody}>
          
          <View style={styles.TextBoxHeadings}>
            <View><Text style={styles.bodyHeadings}>LOCATION</Text></View>
            <View><Text style={styles.bodyHeadingChng}>CHANGE</Text></View>
          </View>
            
            <View style={styles.locationMainView}>
                
                <View style={styles.locationTextArea}>
                  <Text style={styles.locationText}> Napa County </Text>
                </View>
                
                <View style={styles.locationPicArea}>
                  <ImageBackground source={LocationBoxImg} style={styles.locationPicBG}>
                    <Image source={LocImgGredient} style={styles.locationPicFRT}></Image>
                  </ImageBackground>
                </View>

          
            </View>
          
          <View style={styles.FeatureEventHeding}>
            <View><Text style={styles.bodyHeadings}>FEATURED EVENTS</Text></View>
            
            <View style={styles.SeeAllBtnArea}>
              <View>
                <Text style={styles.SeeAllHeading}>SEE ALL</Text>
              </View>
              <View style={styles.SeeAllHeadingArrow}>
                <View style={styles.ArrowContainer}><Image source={MiniArrow} resizeMode= 'center' style={styles.nextArrow}></Image></View>
              </View>
              
            </View>
            
          </View>

          

        </View>
        <View style={styles.crousel}>
        <FeaturedEventCrousel /></View>
      </View>
      
    </View>
    </ScrollView>
  );
};

export default HomeEventScreen;

const styles = StyleSheet.create({
  root: {
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
  head: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    shadowRadius: 'EAEAEA',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    width: '45%',
    maxWidth: 300,
    maxHeight: 200,
  },
  body: {
    height: '100%',
    backgroundColor: '#FFFFFF',
    
  },
  innerbody: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  TextBoxHeadings: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  bodyHeadings: {
    fontFamily: 'Inter-Bold',
    fontSize: 15,
    color: '#3F0321',
    letterSpacing: 2,
  },
  bodyHeadingChng: {
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    color: '#3F0321',
    // letterSpacing: 1,
  },
  locationMainView: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    height: 72,
    width: '100%',
    borderRadius: 12,
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  locationTextArea: {
    
  },
  locationText: {
    marginLeft: 20,
    fontSize: 18,
    color: '#CDA15C',
    fontFamily: 'MontaguSlab_120pt-Regular',
  },
  locationPicArea: {
    alignItems: 'center',
    // justifyContent: 'center',
    width: '74%',
    height: '100%',
    // borderRadius: 12,
  },
  locationPicBG: {
    width: 150,
    height: 70,
    // borderRadius: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  locationPicFRT: {
    width: 150,
    height: 70,
    // borderRadius: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  FeatureEventHeding: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: '#d9d9d9',
  },
  SeeAllBtnArea: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  SeeAllHeading: {
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    color: '#3F0321',
  },
  ArrowContainer:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 8,
    height: 15,
    marginHorizontal: 10,
  },
  SeeAllHeadingArrow: {
  },
  nextArrow: {
  },
  crousel: {
    marginTop: -180,
  }
});
