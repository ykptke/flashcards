import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const CardItem = ({ card, onPressEdit, onPressDelete }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{card.key}</Text>
    <View style={styles.buttons}>
      <TouchableOpacity style={styles.editButton} onPress={() => onPressEdit()}>
        <Image source={require("../../assets/images/edit.png")}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPressDelete()}>
        <Image source={require("../../assets/images/delete.png")}/>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    marginBottom: 30,
    borderWidth: 2,
    borderColor: 'black',
  },
  text: {
    color: '#464646',
    fontSize: 20,
    paddingLeft: 18,
  },
  buttons: {
    flexDirection: 'row',
    paddingRight: 7,
  },
  editButton: {
    paddingRight: 8,
  },
});

export default CardItem;
