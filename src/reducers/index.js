import { AsyncStorage } from 'react-native';
import * as types from '../constants/ActionTypes';

const saveCards = async (cards) => {
  try {
    await AsyncStorage.setItem('CARDS', JSON.stringify(cards));
  } catch (error) {
    console.log('AsyncStorage save error: ' + error.message);
  }
};

const cards = (
  state = { isFetching: false, cards: [] },
  action
) => {
  switch (action.type) {
  case types.ADD_CARD:
    const newCard = {
      id: action.id,
      question: action.question,
      answer: action.answer,
    };
    const cards = [...state.cards, newCard];

    // save cards asyncstorage
    saveCards(cards);

    return {
      ...state,
      cards,
    };
  case types.DELETE_CARD:
    const filtered = state.cards.filter((card) => {
      return card.id !== action.id;
    });

    // save cards asyncstorage
    saveCards(filtered);

    return {
      ...state,
      cards: filtered,
    };
  case types.UPDATE_CARD:
    const cardIndex = state.cards.findIndex(obj => obj.id === action.id);

    const updatedCard = {
      ...state.cards[cardIndex],
      question: action.question,
      answer: action.answer
    };

    const updatedCards = [
      ...state.cards.slice(0, cardIndex),
      updatedCard,
      ...state.cards.slice(cardIndex + 1),
    ];

    // save cards asyncstorage
    saveCards(updatedCards);

    return {
      ...state,
      cards: updatedCards,
    };
  case types.REQUEST_CARDS:
    return {
      ...state,
      isFetching: true,
    };
  case types.RECEIVE_CARDS:
    return {
      ...state,
      isFetching: false,
      cards: action.cards,
    };
  default:
    return state;
  }
};

export default cards;
