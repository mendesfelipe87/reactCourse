import React, { Component } from 'react';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import firebase from 'react-native-firebase'

export default class FacebookClass extends Component {
    constructor(props) {
        super(props);
        this.title = "Facebook Login";
        this.state = {
            facebookData: {
                photoUrl: ""
            }
        }
    }

    facebookLogin = async () => {
        try {
            console.log("Logging from Facebook");
            const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);

            if (result.isCancelled) {
                throw new Error('User cancelled request'); // Handle this however fits the flow of your app
            }

            console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);

            // get the access token
            const data = await AccessToken.getCurrentAccessToken();

            if (!data) {
                throw new Error('Something went wrong obtaining the users access token'); // Handle this however fits the flow of your app
            }

            // create a new firebase credential with the token
            const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);

            // login with credential
            const currentUser = await firebase.auth().signInAndRetrieveDataWithCredential(credential);

            this.loggedUser = currentUser.user.toJSON();
            console.info(JSON.stringify(this.loggedUser));
        } catch (e) {
            console.error(e);
        }
    }
}