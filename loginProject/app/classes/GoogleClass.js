import React, { Component } from 'react';
import { GoogleSignin } from 'react-native-google-signin';
import firebase from 'react-native-firebase'

export default class GoogleClass extends Component {
    constructor(props) {
        super(props);
        this.title = "GoogleLogin Login";
        this.loggedUser = {};
        this.state = {
            googleData: {
                photoUrl: ""
            }
        }
    }

    googleLogin = async () => {
        try {
            // Add any configuration settings here:
            await GoogleSignin.configure({
                iosClientId: '102790865080-ifm72qj8vevqj3kn28cmuji1l0893r1r.apps.googleusercontent.com',
                scopes: ['openid', 'email', 'profile'],
                shouldFetchBasicProfile: true
            });

            const data = await GoogleSignin.signIn();

            // create a new firebase credential with the token
            const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)
            // login with credential
            const currentUser = await firebase.auth().signInAndRetrieveDataWithCredential(credential);

            this.loggedUser = currentUser.user.toJSON();
            console.info(JSON.stringify(currentUser.user.toJSON()));
        } catch (e) {
            console.error(e);
        }
    }
}