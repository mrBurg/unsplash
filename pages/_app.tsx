import React, { ReactElement } from 'react';
import { NextPageContext } from 'next';
import NextApp, { AppContext, AppInitialProps } from 'next/app';
import { Provider } from 'mobx-react';

import initializeStores, { IStores } from '../src/stores';
import { isServer } from '../src/utils';

import Page from '../src/components/Page';

interface IAppProps extends AppInitialProps {
  mobxStore: IStores;
}

interface IAppContext extends AppContext {
  ctx: INextPageContext;
}

interface INextPageContext extends NextPageContext {
  mobxStore?: IStores;
}

export default class App extends NextApp {
  private mobxStore: IStores;

  public static async getInitialProps(
    appContext: IAppContext
  ): Promise<IAppProps> {
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
