import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './style';
export default class Splash extends Component {

 render() {
  return (
   <View style={styles.container}>
    <TouchableOpacity style={{ height: 100, width: 100 }}
     onPress={() => {
      this.props.navigation.navigate('Home')
     }}>
     <Text>Next</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{ height: 100, width: 100 }} onPress={() => {
     this.props.navigation.goBack()
    }}>
     <Text>Back</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{ height: 100, width: 100 }} onPress={() => {

    }}>
     <Text>Perform</Text>
    </TouchableOpacity>
   </View>
  );
 }
}
