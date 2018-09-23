import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { deleteCard } from '../actions';

import CardItem from '../components/CardItem';

class Cards extends React.Component {
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
        <TouchableOpacity onPress={() => navigation.navigate('SubmitCard')}>
          <Image source={require("../../assets/images/add.png")}/>
        </TouchableOpacity>
      ),
    };
  };

  handleEditCard(cardId) {
    this.props.navigation.navigate('SubmitCard', { cardId });
  }

  handleDeleteCard(id) {
    this.props.remove(id);
  }

  render() {
    return (
      <View style={styles.body}>
        <View style={styles.container}>
          <Text style={styles.header}>Cards</Text>
          <FlatList
            style={styles.list}
            data={this.props.cards}
            renderItem={
              ({ item }) => (
                <CardItem
                  card={item}
                  onPressEdit={() => this.handleEditCard(item.id)}
                  onPressDelete={() => this.handleDeleteCard(item.id)}
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

const mapStateToProps = (state) => {
  const { cards, isFetching } = state;

  return {
    cards,
    isFetching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    remove: (id) => {
      dispatch(deleteCard(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
