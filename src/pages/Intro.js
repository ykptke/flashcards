import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default class Intro extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>FlashCards</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Play')}>
          <Image source={require("../../assets/images/play.png")}/>
        </TouchableOpacity>
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
  header: {
    color: '#464646',
    fontSize: 35,
    marginBottom: 50,
  },
});
