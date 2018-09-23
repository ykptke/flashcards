import { AsyncStorage } from 'react-native';
import * as types from '../constants/ActionTypes';

const receiveCards = (cards) => {
  return {
    type: types.RECEIVE_CARDS,
    cards: cards || [],
  };
};

const requestCards = () => {
  return {
    type: types.REQUEST_CARDS,
  };
};

export function addCard(question, answer) {
  return {
    type: types.ADD_CARD,
    id: Date.now(),
    question,
    answer,
  };
}

export function deleteCard(id) {
  return {
    type: types.DELETE_CARD,
    id,
  };
}

export function updateCard(id, question, answer) {
  return {
    type: types.UPDATE_CARD,
    id,
    question,
    answer,
  };
}

export const getAllCards = () => {
  return dispatch => {
    dispatch(requestCards());
    return AsyncStorage.getItem('CARDS')
      .then((cards) => {
        dispatch(receiveCards(JSON.parse(cards)));
      });
  };
}
