import { observable } from 'mobx';

export default class BaseStore {

    /**
   * Indicates wheather the 
   */
    @observable isRefresing = false;
}