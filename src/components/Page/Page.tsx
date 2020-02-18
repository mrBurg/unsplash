import { Component, ReactElement } from 'react';
import Router from 'next/router';
import { inject, observer } from 'mobx-react';

import './../../scss/grid.scss';

import { STORE_IDS } from '../../stores';
import { URLS } from '../Routes';
import Header, { HeaderCtxProvider } from '../Header';

interface IPageProps {
  Component?: any;
  router?: any;
  auth?: any;
  pageProps?: any;
}

interface IPageState {
  auth?: any;
}

@inject(STORE_IDS.AUTH)
@observer
export class Page extends Component<IPageProps, IPageState> {
  public state: IPageState = {};

  static getDerivedStateFromProps(
    props: IPageProps,
    state: IPageState
  ): IPageState {
    let { auth } = props;

    return {
      auth,
      ...state
    };
  }

  public componentDidMount(): void {
    let {
      auth: { token }
    } = this.state;

    let {
      router: { route }
    } = this.props;

    if (!token && route != URLS.SIGNIN) {
      Router.push(URLS.SIGNIN);
    }
  }

  public render(): ReactElement {
    let { Component, pageProps, router } = this.props;
    let { auth } = this.state;

    return (
      <>
        <HeaderCtxProvider value={{ ...auth }}>
          <Header />
        </HeaderCtxProvider>
        <Component {...pageProps} {...auth} router={router} />
      </>
    );
  }
}
