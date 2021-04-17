import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class AppHeader extends React.Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>📖The Treasure Hunter📖</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#FBE7C6',
    alignItems: 'center',
    justifyContent: 'center',
 marginTop: 0,
 height : 90
  },
  textStyle: {
    fontSize: 20,
    fontFamily: 'TimesRoman',
    fontWeight : "bold"
  }
});
