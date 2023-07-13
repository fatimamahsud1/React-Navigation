import {View, Text, FlatList, Pressable} from 'react-native';
import React from 'react';
import Card from './Card';

const OrdersList = ({navigation}) => {
  const orders = [
    {
      orderNumber: 1,
      productName: 'bracelete',
      price: 10.99,
   
    },
    {
      orderNumber: 2,
      productName: 'chain',
      price: 24.99,
    
    },
    {
      orderNumber: 3,
      productName: 'laptop',
      price: 7.99,
   
    },
    
  ];

  const renderMenuItem = ({item}) => {
    return (
      <View>
        <Pressable
          onPress={() =>
            navigation.navigate('ViewOrder', {
              number: item.orderNumber,
              text: item.productName,
              price: item.price,
          
            })
          }>
          <Card
            text={item.productName}
            number={item.orderNumber}
            price={item.price}
          />
        </Pressable>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={orders}
        renderItem={renderMenuItem}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default OrdersList;
