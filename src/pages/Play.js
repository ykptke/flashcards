import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TouchableWithoutFeedback, Animated } from 'react-native';

const cards = [
  {
    question: "school",
    answer: "okul",
  },
  {
    question: "table",
    answer: "masa",
  },
  {
    question: "student",
    answer: "öğrenci",
  },
];

export default class Play extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
      cardIndex: 0,
      animatedValue: new Animated.Value(0),
    };
    this.onPressedIn = this.onPressedIn.bind(this);
    this.onPressedOut = this.onPressedOut.bind(this);
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
        <TouchableOpacity onPress={() => navigation.navigate('Intro')}>
          <Image source={require("../../assets/images/go_back.png")}/>
        </TouchableOpacity>
      ),
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('Cards')}>
          <Image source={require("../../assets/images/list.png")}/>
        </TouchableOpacity>
      ),
    };
  };

  changeCard(num) {
    this.setState((state) => {
      const sum = state.cardIndex + num;
      return {
        cardIndex: (sum < 0) || (sum >= cards.length) ? 0 : sum,
      }
    })
  }

  onPressedIn() {
    this.setState({ isFlipped: true });
    Animated.spring(this.state.animatedValue, {
      toValue: 1,   // Returns to the start
      velocity: 2,  // Velocity makes it move
      tension: 5, // Slow
    }).start();
  }

  onPressedOut() {
    this.setState({ isFlipped: false });
    Animated.spring(this.state.animatedValue, {
      toValue: 0,   // Returns to the start
      velocity: 2,  // Velocity makes it move
      tension: 5, // Slow
    }).start();
  }

  render() {
    const transform = [{
      rotateY: this.state.animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
      })
    }];

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.changeCard(-1)}>
          <Image source={require("../../assets/images/arrow_prev.png")}/>
        </TouchableOpacity>
        <TouchableWithoutFeedback onPressIn={this.onPressedIn} onPressOut={this.onPressedOut}>
          <Animated.View style={[styles.card, { transform }]}>
            <Text style={styles.text}>
              {
                this.state.isFlipped
                ? cards[this.state.cardIndex].answer
                : cards[this.state.cardIndex].question
              }
            </Text>
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableOpacity onPress={() => this.changeCard(1)} style={styles.arrowRight}>
          <Image source={require("../../assets/images/arrow_next.png")}/>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  arrowRight: {
    paddingRight: 10,
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
    height: 180,
    marginLeft: -10,
    borderWidth: 2,
    borderColor: 'black',
  },
  text: {
    fontSize: 24,
  }
});
