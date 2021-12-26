import { makeAutoObservable } from "mobx";

class UserStore {
  
  username:string = '';

  constructor () {
    makeAutoObservable(this);
  }

  setUsername (username:string) {
    this.username = username;
  }
}

export default UserStore;