import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function ProductDetails({route, navigation}) {
  const {text, price, description, image} = route.params;
  return (
    <View style={{flex: 1, backgroundColor: 'purple'}}>
      <Text
        style={{fontSize: 40, color: 'white', margin: 15, alignSelf: 'center',justifyContent:'center'}}>
        Product Details
      </Text>
      <Text style={styles.text}>Name: {text}</Text>
      <Text style={styles.text}>Price: {price}</Text>
      <Text style={styles.text}>Description: {description}</Text>
      <Image
        source={{uri: image}}
        style={{
          width: 100,
          height: 100,
          marginVertical: 20,
          marginRight: 20,
          alignSelf: 'center',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: 'white',
    marginBottom: 15,
  },
});
