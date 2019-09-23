import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './screen/LoginScreen'
import HomeScreen from './screen/HomeScreen'

export default class App extends React.Component {
  render(){
    return (
     <MyApp/>
    );
  }
}



const AppStackNavigator = createStackNavigator({
 Login: LoginScreen,
 Home: HomeScreen
})

const MyApp = createAppContainer(AppStackNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
