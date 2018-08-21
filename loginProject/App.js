import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'mobx-react/native';
import Stores from './app/stores/RootStores';
import LoginScreen from './app/screen/LoginScreen';
import LoggedInScreen from './app/screen/LoggedInScreen';

const Navigator = createStackNavigator(
  {
    Login: { screen: LoginScreen },
    LoggedIn: { screen: LoggedInScreen }
  },
  {
    initialRouteName: 'Login',
    navigationOptions: {
    },
  }
);

export default class App extends Component {
  render() {
    return (
      <Provider {...Stores}>
        <SafeAreaView style={{ flex: 1 }}>
          <Navigator />
        </SafeAreaView>
      </Provider>
    );
  }
}
