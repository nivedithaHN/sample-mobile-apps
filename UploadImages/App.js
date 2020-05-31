import React, {Component} from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import HomeActivity from './src/Home';
import ViewPhotosActivity from './src/ViewPhotos';

const NavigationStackInit = createSwitchNavigator(
    {
      Home: {screen: HomeActivity},
      ViewPhotos: {screen: ViewPhotosActivity},
    },
    {
      initialRouteName: 'Home',
    },
);

const NavigationContainer = createAppContainer(NavigationStackInit);

export default class App extends Component {
  render() {
    return <NavigationContainer />;
  }
}
