import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Cards extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Cards</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7EDDF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
