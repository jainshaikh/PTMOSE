import { StyleSheet, Text, View, FlatList, useWindowDimensions, Image } from 'react-native'
import React from 'react';
import slides from '../../../slides';

export default CrouselPrac = ({ item }) => {
  const { width } = useWindowDimensions();
  
  return (
  <View style={[styles.root, { width }]}>
    <Image source={item.image} style={[styles.image, {width, resizeMode: 'contain' }]} />
    
    <View style={{flex: 0.3}}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.Decs}>{item.description}</Text>
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
    flex: 0.7,
    justifyContent: 'center',   
  },
  title: {
    fontWeight: '800',
    fontSize: 28,
    marginBottom: 10,
    color: '#493d8a',
    textAlign: 'center',
    paddingHorizontal: 64,
  },
  Decs: {
    fontWeight: '300',
    color: '#62656b',
    textAlign: 'center',
    paddingHorizontal: 64,
  }
});