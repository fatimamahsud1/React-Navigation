import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function OrderDetail({route, navigation}) {
  const {text, number, price, status, date} = route.params;
  return (
    <View style={{flex:1,backgroundColor: 'purple'}}>
      <Text
        style={{fontSize: 40, color: 'white', margin: 15, alignSelf: 'center'}}>
        Order Details
      </Text>
      <Text style={styles.text}>Name: {text}</Text>
      <Text style={styles.text}>Number: {number}</Text>
      <Text style={styles.text}>Price: {price}</Text>

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
