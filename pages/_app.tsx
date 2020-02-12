import NextApp, { AppContext, AppInitialProps } from 'next/app';
import React, { ReactElement } from 'react';
import { Provider } from 'mobx-react';

import { stores } from '../src/stores';

import Page from '../src/components/Page';

export default class App extends NextApp {
  static async getInitialProps(
    appContext: AppContext
  ): Promise<AppInitialProps> {
    const appProps = NextApp.getInitialProps(appContext);

    return {
      AppName: 'Unsplash',
      ...appProps
    };
  }

  render(): ReactElement {
    return (
      <Provider {...stores}>
        <Page {...this.props} />
      </Provider>
    );
  }
}
