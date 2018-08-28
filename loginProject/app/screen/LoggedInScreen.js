import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { observer, inject } from 'mobx-react/native';

@inject('loginStore')
@observer
export default class LoggedInScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { loginStore } = this.props;
        const loggedUser = loginStore.loggedUser;

        return (
            <View>
                <Image source={{uri: loggedUser.photoURL}} style={{width: 120, height: 120}}/>
                <Text>{loggedUser.displayName}</Text>
            </View>
        );
    }
}