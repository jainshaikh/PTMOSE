 import React from 'react';
 import {SafeAreaView, StyleSheet} from 'react-native';
 import Navigation from './src/navigation';
//  import HomeEventScreen from './src/screens/HomeEventsScreen';
//  import OnBoardingScreen from './src/screens/OnBoardingScreen';
//  import OnBoardingCrouselScreen from './src/screens/OnBoardingCrouselScreen/CrouselPracMain';

 const App = () => {
   return (
     <SafeAreaView style={styles.root}>
       <Navigation />
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   root: {
    //  flex: 1,
     backgroundColor: '#ffffff',
   },
 });
 
 export default App;
 