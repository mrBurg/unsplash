import NextApp, { AppContext, AppInitialProps } from 'next/app';
import { ReactElement } from 'react';
import { Provider } from 'mobx-react';
// import fetch from 'isomorphic-unfetch';

import './../src/scss/grid.scss';

import { stores } from '../src/stores';

import Header from '../src/components/Header';

interface IState {}

interface IProps {}

export default class App extends NextApp<IProps, IState> {
  public state: IState = {};

  static async getInitialProps(
    appContext: AppContext
  ): Promise<AppInitialProps> {
    const appProps = NextApp.getInitialProps(appContext);

    return {
      ...appProps
    };
  }

  /* static getDerivedStateFromProps(props: IProps, state: IState): IState {
    return state;
  } */

  render(): ReactElement {
    const { Component, pageProps } = this.props;

    console.warn(
      `Application rendered at ${process.env.HOST}:${process.env.PORT}`
    );

    return (
      <Provider {...stores}>
        <Header />
        <Component {...pageProps} />
      </Provider>
    );
  }
}
