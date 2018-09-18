import React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Intro from './src/pages/Intro';
import Play from './src/pages/Play';
import Cards from './src/pages/Cards';
import EditCard from './src/pages/EditCard';

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
    EditCard: {
      screen: EditCard,
    },
  },
  {
    initialRouteName: 'Intro',
  }
);

export default class App extends React.Component {
  componentDidMount() {
    StatusBar.setHidden(true);
  }
  render() {
    return <RootStack />;
  }
}
