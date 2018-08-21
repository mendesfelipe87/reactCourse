import { observable, action } from 'mobx';
import BaseStore from './BaseStores';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import { GoogleSignin } from 'react-native-google-signin';
import firebase from 'react-native-firebase'

export default class LoginStore extends BaseStore {

    /**
     * User observable.
     */
    @observable loggedUser;
    @observable titleFacebook = 'Facebook Login';
    @observable titleGoogle = 'Google Login';

    @action
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

    @action
    googleLogin = async () => {
        try {
            console.log("Logging from Google");
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