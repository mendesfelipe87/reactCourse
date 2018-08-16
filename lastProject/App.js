import React, { Component } from 'react';
import { AppRegistry, SafeAreaView } from 'react-native';
import { name as appName, displayName } from './app.json';
import ClientScreen from './app/screens/ClientScreen';
import PrincipalScreen from './app/screens/PrincipalScreen';
import UsersScreen from './app/screens/UsersScreen';
import PostsScreen from './app/screens/PostsScreen';
import SavePostsScreen from './app/screens/SavePostsScreen';
import { createStackNavigator } from 'react-navigation';
import headerStyle from './app/styles/HeaderStyle';
import HeaderRight from './app/components/HeaderComponent';
import { Provider } from 'mobx-react/native';
import Stores from './app/stores/RootStores';

const Navigator = createStackNavigator(
  {
    Principal: { screen: PrincipalScreen },
    Client: { screen: ClientScreen },
    Users: { screen: UsersScreen },
    Posts: { screen: PostsScreen },
    EditPosts: { screen: SavePostsScreen }
  },
  {
    initialRouteName: 'Users',
    cardStyle: headerStyle.cardStyle,
    navigationOptions: {
      headerTitle: displayName,
      headerStyle: headerStyle.barraTitulo,
      headerRight: <HeaderRight />,
      headerRightContainerStyle: headerStyle.containerRight,
      headerTitleStyle: headerStyle.titulo
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

AppRegistry.registerComponent(appName, () => App);
