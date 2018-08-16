import React, { Component } from 'react';
import { Button } from 'react-native';
import facebookLogin from '../classes/FacebookLogin';

export default class FacebookLoginButton extends Component {

    render () {
        return (
            <Button onPress={() => {facebookLogin()}} title="Facebook Login" />
        );
    }
}