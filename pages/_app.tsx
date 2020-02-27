import React, { ReactElement } from 'react';
import NextApp, { AppContext, AppInitialProps } from 'next/app';
import { Provider } from 'mobx-react';

import initializeStores, { IStores } from '../src/stores';
import { isServer } from '../src/utils';

import Page from '../src/components/Page';

declare module 'next' {
  interface NextPageContext {
    mobxStore: IStores;
  }
}

interface IAppProps extends AppInitialProps {
  mobxStore: IStores;
}

export default class App extends NextApp {
  private mobxStore: IStores;

  static async getInitialProps(appContext: AppContext): Promise<IAppProps> {
    const mobxStore = initializeStores();
    appContext.ctx.mobxStore = mobxStore;
    const appProps = await NextApp.getInitialProps(appContext);

    return {
      mobxStore,
      ...appProps
    };
  }

  constructor(props: any) {
    super(props);

    this.mobxStore = isServer
      ? props.mobxStore
      : initializeStores(props.mobxStore);
  }

  public render(): ReactElement {
    return (
      <Provider {...this.mobxStore}>
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
