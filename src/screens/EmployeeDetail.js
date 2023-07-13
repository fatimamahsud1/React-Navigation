import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function EmployeeDetail({route, navigation}) {
  const {text, designation} = route.params;
  return (
    <View style={{flex:1,backgroundColor: 'purple'}}>
      <Text
        style={{fontSize: 40, color: 'white', margin: 15, alignSelf: 'center'}}>
        Employee Details
      </Text>
      <Text style={styles.text}>Name: {text}</Text>
      <Text style={styles.text}>Designation: {designation}</Text>
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
