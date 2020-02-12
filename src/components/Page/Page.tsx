import { Component, ReactElement } from 'react';
import Router from 'next/router';
import { inject, observer } from 'mobx-react';

import './../../scss/grid.scss';

import { STORE_IDS } from '../../stores';
import { URLS } from '../Routes';
import Header from '../Header';

interface IPageProps {
  Component: any;
  router: any;
  auth?: any;
  pageProps?: any;
}

@inject(STORE_IDS.AUTH)
@observer
export class Page extends Component<IPageProps> {
  public componentDidMount(): void {
    let { auth } = this.props;

    console.info(auth.token);

    if (!auth.token) {
      Router.push(URLS.SIGNIN);
    }
  }

  render(): ReactElement {
    let { Component, pageProps } = this.props;
    return (
      <>
        <Header />
        <Component {...pageProps} />
      </>
    );
  }
}
