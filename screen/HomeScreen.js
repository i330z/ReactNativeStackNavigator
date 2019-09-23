import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class HomeScreen extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Button title="go back to login page" onPress={()=> this.props.navigation.goBack()} />
        <Button title="go back to First Page" onPress={()=> this.props.navigation.popToTop()} />
      </View>
    );
  }
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
