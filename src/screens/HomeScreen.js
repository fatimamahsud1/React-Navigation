import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.button}>
        <Pressable
          onPress={() => {
            navigation.navigate('Products');
          }}>
          <Text style={styles.text}>Manage Products</Text>
        </Pressable>
      </View>
      <View style={styles.button}>
        <Pressable
          onPress={() => {
            navigation.navigate('Employees');
          }}>
          <Text style={styles.text}>Manage Employees</Text>
        </Pressable>
      </View>
      <View style={styles.button}>
        <Pressable
          onPress={() => {
            navigation.navigate('Orders');
          }}>
          <Text style={styles.text}>Manage Orders</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white',
    flex: 1,
  },
  
  text: {
    color: 'white',
    fontSize: 22,
  },

  button: {
    backgroundColor: 'purple',
    height: '10%',
    width: '80%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
  },
 
});
