import NextApp, { AppContext, AppInitialProps } from 'next/app';
import React, { ReactElement } from 'react';
import { Provider } from 'mobx-react';

import { stores } from '../src/stores';

import Page from '../src/components/Page';

interface IAppProps extends AppInitialProps {
  AppName: string;
}

export default class App extends NextApp {
  static async getInitialProps(appContext: AppContext): Promise<IAppProps> {
    const appProps = await NextApp.getInitialProps(appContext);

    return {
      AppName: 'Unsplash',
      ...appProps
    };
  }

  render(): ReactElement {
    return (
      <Provider {...stores}>
        <Page {...this.props} />
        <style jsx global>
          {`
            #__next {
              display: flex;
              flex-flow: column nowrap;
              height: 100vh;
              width: 100vw;
            }
          `}
        </style>
      </Provider>
    );
  }
}
