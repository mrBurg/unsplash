import NextApp, { AppContext, AppInitialProps } from 'next/app';
// import fetch from 'isomorphic-unfetch';
import { ReactElement } from 'react';
import { Provider } from 'mobx-react';

import Store /* fetchInitialStoreState */ from '../src/stores/store';

import './../src/scss/grid.scss';

import Header from '../src/components/Header';

export default class App extends NextApp {
  state = {
    store: new Store()
  };

  static async getInitialProps(
    appContext: AppContext
  ): Promise<AppInitialProps> {
    const appProps = NextApp.getInitialProps(appContext);

    // const initialStoreState = fetchInitialStoreState();

    /* return {
      initialStoreState,
      ...appProps
    }; */

    return {
      myData: [0, 1, 2],
      ...appProps
    };
  }

  //@ts-ignore
  static getDerivedStateFromProps(props: any, state: any) {
    // console.info(props, 'Props getDerivedStateFromProps');
    // console.info(state, 'State getDerivedStateFromProps');

    return state;
  }

  render(): ReactElement {
    const { Component, pageProps } = this.props;

    console.info(this.props);

    /* console.warn(
      `Application rendered at ${process.env.HOST}:${process.env.PORT}`
    ); */

    return (
      <Provider store={this.state.store}>
        <Header />
        <Component {...pageProps} />
      </Provider>
    );
  }
}
