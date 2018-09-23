import React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './src/reducers';

import Intro from './src/pages/Intro';
import Play from './src/pages/Play';
import Cards from './src/pages/Cards';
import SubmitCard from './src/pages/SubmitCard';

import configureStore from './src/configureStore';

const store = configureStore();

const RootStack = createStackNavigator(
  {
    Intro: {
      screen: Intro,
    },
    Play: {
      screen: Play,
    },
    Cards: {
      screen: Cards,
    },
    SubmitCard: {
      screen: SubmitCard,
    },
  },
  {
    initialRouteName: 'Intro',
  },
);

export default class App extends React.Component {
  componentDidMount() {
    StatusBar.setHidden(true);
  }
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}
