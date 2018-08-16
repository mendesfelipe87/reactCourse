import React, { Component } from 'react';
import { Button } from 'react-native';
import googleLogin from '../classes/GoogleLogin';

export default class GoogleLoginButton extends Component {

    render () {
        return (
            <Button onPress={() => {googleLogin()}} title="Google Login" />
        );
    }
}