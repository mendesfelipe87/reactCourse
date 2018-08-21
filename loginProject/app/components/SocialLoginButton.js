import React, { Component } from 'react';
import { Button } from 'react-native';

export default class SocialLoginButton extends Component {
    constructor (props) {
        super(props);
        this.props = props;
    }

    render () {
        return (
            <Button onPress={() => {this.props.callback()}} title={this.props.title} />
        );
    }
}