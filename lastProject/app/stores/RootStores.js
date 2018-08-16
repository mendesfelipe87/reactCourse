import UsersStore from './UsersStores';
import PostsStore from './PostsStores';

class RootStores {

    constructor() {
        this.usersStore = new UsersStore();
        this.postsStore = new PostsStore();
    }
};

export default new RootStores();