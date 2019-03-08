import { createInstance } from 'sharetribe-flex-sdk';
import config from '../../config';
import AsyncStore from './AsyncStore';

class SharetribeSdkService {
  init() {
    this.sdk = createInstance({
      clientId: config.MARKETPLACE_ID,
      tokenStore: AsyncStore({ clientId: config.MARKETPLACE_ID }),
    });
  }

  register({ firstName, lastName, email, password }) {
    return this.sdk.currentUser.create({
      firstName,
      lastName,
      email,
      password,
    });
  }

  login({ email, password }) {
    return this.sdk.login({
      username: email,
      password,
    });
  }

  logout() {
    return this.sdk.logout();
  }

  isAuthenticated() {
    return this.sdk.authInfo();
  }

  getUser() {
    return this.sdk.currentUser.show();
  }
}

export default new SharetribeSdkService();