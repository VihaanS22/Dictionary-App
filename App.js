import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import AppHeader from './components/Header'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       <AppHeader/>
        <HomeScreen/>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BACC81',
  },
});
