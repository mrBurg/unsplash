// import { action, observable } from 'mobx';
import { useStaticRendering } from 'mobx-react';

const isServer = typeof window === 'undefined';
// eslint-disable-next-line react-hooks/rules-of-hooks
useStaticRendering(isServer);

export async function fetchInitialStoreState() {
  return {};
}

export default class Store {
  // timer: any;
  // @observable lastUpdate = 0;
  // @observable light = false;
  /* hydrate(serializedStore: any) {
    this.lastUpdate =
      serializedStore.lastUpdate != null
        ? serializedStore.lastUpdate
        : Date.now();
    this.light = !!serializedStore.light;
  } */
  // @action start = () => {
  /* this.timer = setInterval(() => {
      this.lastUpdate = Date.now();
      this.light = true;
    }, 1000); */
  // };
  // stop = () => clearInterval(this.timer);
}
