import { StyleSheet, Text, View, FlatList, useWindowDimensions, Image } from 'react-native'
import React from 'react';
import slides from '../slides';

export default CrouselItems = ({ item }) => {
  const { width } = useWindowDimensions();
  
  return (
  <View style={[styles.root, { width }]}>
    <Image source={item.image} style={[styles.image, {width, resizeMode: 'contain' }]} />
    <View style={{flex: 0.1}}>
      <Text style={styles.marchant}>{item.marchant}</Text>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.time}>{item.time}</Text>
      <Text style={styles.location}>{item.location}</Text>
    </View>

    </View>

    );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 0.6,
    justifyContent: 'center',   
  },
  marchant:{
    fontFamily: 'Inter-Bold',
    fontSize: 16,
  },
  title: {
    fontSize: 28,
    marginBottom: 10,
    color: '#CDA15C',
    fontFamily: 'MontaguSlab_120pt-Regular',
    // paddingRight: 80,
  },
  date:{
    fontFamily: 'Inter-Regular',
    fontSize: 14,
  },
  time:{
    fontFamily: 'Inter-Regular',
    fontSize: 14,
  },
  location:{
    fontFamily: 'Inter-Regular',
    fontSize: 14,
  },
  description:{

  },
  Decs: {
    fontWeight: '300',
    color: '#62656b',
    textAlign: 'center',
    paddingHorizontal: 64,
  }
});