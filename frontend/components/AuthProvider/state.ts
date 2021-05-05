import { makeAutoObservable } from 'mobx';
import { IAuthData } from './interfaces';

class Auth {
    private authData: IAuthData = {
      email: null,
      nickName: null,
    };

    constructor() {
      makeAutoObservable(this);
    }

    setAuthData(authData: IAuthData) {
      this.authData = authData;
    }

    get authInfo() {
      return this.authData;
    }
}

export default new Auth();
