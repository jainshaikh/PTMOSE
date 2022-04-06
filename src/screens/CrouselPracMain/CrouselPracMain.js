import { StyleSheet, Text, View, FlatList, Animated } from 'react-native'
import React, { useState, useRef} from 'react';
import CrouselPrac from '../CrouselPrac/CrouselPrac';
import slides from '../../../slides';



export default CrouselPracMain = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

    const scrollX = useRef (new Animated.Value(0)).current;
    const slidesref =useRef(null);

    const viewableItemsChange = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentageThreshold: 50 }).current;

  return (
    <View style={styles.root}>
      <View style={{ flex: 3 }}>
      
      <FlatList 
      data={slides} 
      renderItem= {({ item }) => <CrouselPrac item={item} />}
      horizontal
      showsHorizontalScrollIndicator
      pagingEnabled
      bounces={false}
      keyExtractor = {(item) => item.id}
      onScroll = {Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } } ] , {
          useNativeDriver: false,
      })}
      scrollEventThrottle={32}
      // onViewableItemsChanged={viewableItemsChange}
      viewabilityConfig={viewConfig}
      ref={slidesref}
      />

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
});