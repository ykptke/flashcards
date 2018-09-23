import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { addCard, updateCard } from '../actions';

class SubmitCard extends React.Component {
  constructor() {
    super();

    this.state = {
      question: "",
      answer: ""
    };
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
    };
  };

  handleSubmit() {
    const { question, answer } = this.state;
    const { cards, addCard, update, navigation } = this.props;
    const cardId = navigation.state.params && navigation.state.params.cardId;

    if (cardId) {
      update(cardId, question, answer);
    } else {
      addCard(question, answer);
    }

    navigation.goBack();
  }

  componentDidMount() {
    const { cards, navigation } = this.props;
    const cardId = navigation.state.params && navigation.state.params.cardId;

    if (cardId) {
      const card = cards.find((el) => el.id === cardId);
      this.setState({
        question: card ? card.question : '',
        answer: card ? card.answer : '',
      });
    }
  }

  render() {
    return (
      <View style={styles.body}>
        <View style={styles.container}>
          <Text style={styles.header}>Submit Card</Text>
          <View style={styles.edit}>
            <Text style={styles.title}>Question</Text>
            <TextInput
              style={styles.input}
              onChangeText={(question) => this.setState({ question })}
              value={this.state.question}
            />
            <Text style={styles.title}>Answer</Text>
            <TextInput
              style={styles.input}
              onChangeText={(answer) => this.setState({ answer })}
              value={this.state.answer}
            />
            <TouchableOpacity onPress={() => this.handleSubmit()}>
              <Text style={styles.button}>SAVE</Text>
            </TouchableOpacity>
          </View>
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
  edit: {
    marginTop: 27,
    marginBottom: 27,
  },
  input: {
    height: 47,
    padding: 10,
    marginBottom: 10,
    color: '#464646',
    fontSize: 20,
    borderColor: 'black',
    borderWidth: 2
  },
  title: {
    color: '#FF9900',
    fontSize: 20,
    paddingBottom: 2,
  },
  button: {
    width: 100,
    textAlign: 'center',
    height: 47,
    padding: 10,
    color: '#464646',
    fontSize: 20,
    borderColor: 'black',
    borderWidth: 2
  },
});

const mapStateToProps = (state) => {
  const { cards } = state;

  return {
    cards,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (question, answer) => {
      dispatch(addCard(question, answer));
    },
    update: (id, question, answer) => {
      dispatch(updateCard(id, question, answer));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubmitCard);
