import LoginStore from './LoginStore';

class RootStore {

    constructor() {
        this.loginStore = new LoginStore();
    }
};

export default new RootStores();