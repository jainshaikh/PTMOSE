import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import React from 'react'

const CustomInput = ({values, setValues, placeholder, secureTextEntry, setsource}) => {
  return (
    <View style={styles.container}>
      <TextInput
      values={values}
      onChangeText={setValues}
      placeholder={placeholder}
      style={styles.input}
      secureTextEntry={secureTextEntry} 
    />
    <Image source={setsource}
        style={styles.ImageStyle}/>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFFFFF',
        width: '100%',
        borderColor: '#D9D9D9',
        borderWidth: 1,
        borderRadius: 12,
        paddingHorizontal: 10,
        marginVertical: 5,
        underlineColorAndroid: "transparent",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
    input:{
      padding: 15,
      fontFamily: 'Inter-Bold',
      fontSize: 14 ,
      letterSpacing: 1,
      flex: 1,
    },
    ImageStyle: {
      margin: 15,
      height: 18,
      width: 18,
      resizeMode: 'contain',
  },
});

export default CustomInput;