import React from 'react';
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
    navigationOptions: {
      headerStyle: {
        display: 'none',
      },
    },
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
