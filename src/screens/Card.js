import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const Card = ({text, image, price, designation, number}) => {
  return (
    <View style={{backgroundColor: 'purple'}}>
      <View
        style={{
          backgroundColor: 'white',
          width: width,
          height: 7,
          alignSelf: 'center',
          marginBottom: 40,
        }}></View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
          }}>
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Name: {text}
            </Text>
            {designation && (
              <Text
                style={{
                  fontSize: 20,
                }}>
                Designation: {designation}
              </Text>
            )}
            {number && (
              <Text
                style={{
                  fontSize: 20,
                }}>
                Number: {number}
              </Text>
            )}
            {price && (
              <Text
                style={{
                  fontSize: 16,
                  marginTop: 5,
                }}>
                {`$${price}`}
              </Text>
            )}
          </View>
         
        </View>
      </View>
    </View>
  );
};

export default Card;

