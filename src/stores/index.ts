import AuthStore from './Auth';
import Counter from './counter';

export enum STORE_IDS {
  AUTH = 'auth',
  COUNTER = 'counter'
}

const auth = new AuthStore();
const counter = new Counter();

export const stores = {
  [STORE_IDS.AUTH]: auth,
  [STORE_IDS.COUNTER]: counter
};
