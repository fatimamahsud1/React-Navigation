import {View, Text, FlatList, Pressable} from 'react-native';
import React from 'react';
import Card from './Card';

const EmployeesList = ({navigation}) => {
  const employees = [
    {name: 'Fatima', designation: 'Engineer'},
    {name: 'Areej', designation: 'Designer'},
    {name: 'Rashid', designation: 'Architecture'},
    {name: 'Eman', designation: 'teacher'},
    {name: 'David', designation: 'Analyst'},
  
  ];

  const renderMenuItem = ({item}) => {
    return (
      <View>
        <Pressable
          onPress={() =>
            navigation.navigate('ViewEmployee', {
              designation: item.designation,
              text: item.name,
            })
          }>
          <Card text={item.name} designation={item.designation} />
        </Pressable>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={employees}
        renderItem={renderMenuItem}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default EmployeesList;
