import React, { Component } from 'react';
import { StyleSheet, FlatList, View, RefreshControl } from 'react-native';
import { observer, inject } from 'mobx-react/native';
import { toJS } from 'mobx';
import Post from '../components/PostsComponent';

@inject('postsStore')
@observer
export default class Posts extends Component {

    static navigationOptions = ({ navigation }) => {
        const { user } = navigation.state.params || {};

        return {
            title: `Posts of ${user.name}`
        };
    };

    componentWillUnmount() {
        const { postsStore } = this.props;
        postsStore.posts = [];
    }

    render() {
        const { postsStore } = this.props;
        return (
            <FlatList
                data={toJS(postsStore.posts)}
                refreshing={true}
                refreshControl={
                    <RefreshControl
                        refreshing={postsStore.isRefresing}
                        onRefresh={async () => await postsStore.fetchPostsAsync(this.props.navigation.state.params.user.id)}
                    />
                }
                extraData={this.props}
                keyExtractor={this._keyExtractor.bind(this)}
                renderItem={this._renderItem.bind(this)}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
        );
    }

    _keyExtractor = item => item.id.toString();

    _renderItem = ({ item }) => {
        const { navigation } = this.props;
        const params = Object.assign({}, item, navigation)
        return (
            <Post
                {...params}
                key={item.id}
                deleting={item.deleting}
            />
        );
    };

    async componentDidMount() {
        const { postsStore } = this.props;
        await postsStore.fetchPostsAsync(this.props.navigation.state.params.user.id);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    separator: {
        borderBottomWidth: 1,
        borderColor: 'lightgray',
        marginLeft: 12,
        marginRight: 12
    }
});