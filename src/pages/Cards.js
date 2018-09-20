import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native';

import CardItem from '../components/CardItem';

export default class Cards extends React.Component {
  constructor() {
    super();
    this.handleEditCard = this.handleEditCard.bind(this);
    this.handleDeleteCard = this.handleDeleteCard.bind(this);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: {
        backgroundColor: '#F7EDDF',
        borderBottomWidth: 0,
        marginRight: 10,
        marginLeft: 10,
      },
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require("../../assets/images/go_back.png")}/>
        </TouchableOpacity>
      ),
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('EditCard')}>
          <Image source={require("../../assets/images/add.png")}/>
        </TouchableOpacity>
      ),
    };
  };

  handleEditCard() {
    alert('edit');
  }

  handleDeleteCard() {
    alert('delete');
  }

  render() {
    return (
      <View style={styles.body}>
        <View style={styles.container}>
          <Text style={styles.header}>Cards</Text>
          <FlatList
            style={styles.list}
            data={[
              {key: 'Devin'},
              {key: 'Jackson'},
              {key: 'James'},
              {key: 'Joel'},
              {key: 'John'},
              {key: 'Jillian'},
              {key: 'Jimmy'},
              {key: 'Julie'},
            ]}
            renderItem={
              ({item}) => (
                <CardItem
                  card={item}
                  onPressEdit={this.handleEditCard}
                  onPressDelete={this.handleDeleteCard}
                />
              )
            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#F7EDDF',
  },
  container: {
    marginTop: 85,
    marginRight: 20,
    marginLeft: 20,
  },
  header: {
    color: '#464646',
    fontSize: 35,
  },
  list: {
    marginTop: 27,
    marginBottom: 27,
  },
});
