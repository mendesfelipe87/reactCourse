import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';

@inject('loginStore')
@observer
export default class LoggedInScreen extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { loginStore } = this.props;

        return (
            <View>
                <Image source={loginStore.loggedUser.photoURL}/>
                <Text />
            </View>
        );
    }
}