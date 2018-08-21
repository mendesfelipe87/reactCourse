import React, { Component } from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native';

import firebase from 'react-native-firebase';
import SocialLoginButton from './app/components/SocialLoginButton';
import FacebookClass from './app/classes/FacebookClass';
import GoogleClass from './app/classes/GoogleClass';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.facebookClass = new FacebookClass();
    this.googleClass = new GoogleClass();
    this.state = {
      // firebase things?
    };
  }

  componentDidMount() {
    // firebase things?
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image source={require('./assets/RNFirebase.png')} style={[styles.logo]} />
          <Text style={styles.welcome}>
            Welcome to {'\n'} React Native Firebase
          </Text>
          <Text style={styles.instructions}>
            To get started, edit App.js
          </Text>
          {Platform.OS === 'ios' ? (
            <Text style={styles.instructions}>
              Press Cmd+R to reload,{'\n'}
              Cmd+D or shake for dev menu
            </Text>
          ) : (
              <Text style={styles.instructions}>
                Double tap R on your keyboard to reload,{'\n'}
                Cmd+M or shake for dev menu
            </Text>
            )}
          <View style={styles.modules}>
            <Text style={styles.modulesHeader}>The following Firebase modules are pre-installed:</Text>
            {firebase.auth.nativeModuleExists && <Text style={styles.module}>auth()</Text>}
          </View>
          <SocialLoginButton callback={() => {this.facebookClass.facebookLogin()}} title={this.facebookClass.title} />
          <SocialLoginButton callback={() => {this.googleClass.googleLogin()}} title={this.googleClass.title} />

          <Image source={this.facebookClass.loggedUser.photoUrl} style={[styles.logo]} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logo: {
    height: 120,
    marginBottom: 16,
    marginTop: 32,
    width: 120,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  modules: {
    margin: 20,
  },
  modulesHeader: {
    fontSize: 16,
    marginBottom: 8,
  },
  module: {
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
  }
});