import { Component, ReactElement } from 'react';
import Router from 'next/router';
import { inject, observer } from 'mobx-react';

import './../../scss/grid.scss';

import { STORE_IDS } from '../../stores';
import { URLS } from '../Routes';
import Header, { HeaderCtxProvider } from '../Header';
// import { isBrowser } from '../../utils';

interface IPageProps {
  Component: any;
  router: any;
  auth?: any;
  pageProps?: any;
}

interface IPageState {}

@inject(STORE_IDS.AUTH)
@observer
export class Page extends Component<IPageProps, IPageState> {
  public state: IPageState = {};

  static getDerivedStateFromProps(props: any, state: any): any {
    console.info('getDerivedStateFromProps');
    console.info(props, state);

    let { auth } = props;

    console.info(auth.token, ' <<< Token');

    /* if (!auth.token) {
      setTimeout(() => {
        if (isBrowser) {
          Router.push(URLS.SIGNIN);
        }
      }, 3000);
    } */

    return state;
  }

  public getSnapshotBeforeUpdate(prevProps: any, prevState: any): null {
    console.info('getSnapshotBeforeUpdate');

    console.info(prevProps, prevState);

    return null;
  }

  public componentDidMount(): void {
    console.info('componentDidMount');
  }

  public componentDidUpdate(): void {
    console.info('componentDidMount');
    let { auth } = this.props;

    console.info(auth.token, ' <<< Token');

    if (!auth.token) {
      Router.push(URLS.SIGNIN);
    }
  }

  public render(): ReactElement {
    let { Component, pageProps, auth } = this.props;

    return (
      <>
        <HeaderCtxProvider value={{ ...auth }}>
          <Header />
        </HeaderCtxProvider>
        <Component {...pageProps} />
      </>
    );
  }
}
