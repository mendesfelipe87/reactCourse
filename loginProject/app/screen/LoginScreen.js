import React, { Component } from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native';
import { observer, inject } from 'mobx-react/native';
import firebase from 'react-native-firebase';
import SocialLoginButton from '../components/SocialLoginButton';

@inject('loginStore')
@observer
export default class LoginScreen extends Component {

  componentDidMount() {
    // firebase things?
  }

  render() {
    const { loginStore } = this.props; 
    
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image source={require('../../assets/RNFirebase.png')} style={[styles.logo]} />
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
          <SocialLoginButton callback={async () => await this.loginPeloFacebook()} title={loginStore.titleFacebook} />
          <SocialLoginButton callback={async () => await this.loginPeloGoogle()} title={loginStore.titleGoogle} />
        </View>
      </ScrollView>
    );
  }

  loginPeloFacebook = async () => {
    const { loginStore } = this.props; 
    const { navigate } = this.props.navigation;
    await loginStore.facebookLogin();
    navigate('LoggedIn');
  }

  loginPeloGoogle = async () => {
    const { loginStore } = this.props; 
    const { navigate } = this.props.navigation;
    await loginStore.googleLogin();
    navigate('LoggedIn');
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