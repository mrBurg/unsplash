import { Component, ReactElement } from 'react';
import { NextComponentType } from 'next';
import Router from 'next/router';
import { inject, observer } from 'mobx-react';

import './../../scss/grid.scss';

import { IComponentProps } from '../../interfaces';
import { STORE_IDS } from '../../stores';
import { URLS } from '../Routes';
import Header from '../Header';

interface IPageProps extends IComponentProps {
  Component: NextComponentType;
  router: any;
  pageProps?: any;
}

@inject(STORE_IDS.AUTH)
@observer
export class Page extends Component<IPageProps> {
  private checkAuthorization(): void {
    this.props.auth.readToken();

    let {
      auth: { token },
      router: { route }
    } = this.props;

    if (!token && !(route == URLS.SIGNIN || route == URLS.SIGNUP)) {
      let intervalCount: number = 3;

      let interval: NodeJS.Timeout = setInterval((): void => {
        console.info(`Redirect will be in ${intervalCount} seconds`);

        intervalCount--;

        if (!intervalCount) {
          clearInterval(interval);

          Router.push(URLS.SIGNIN);
        }
      }, 1000);
    }
  }

  public componentDidMount(): void {
    this.checkAuthorization();
  }

  public componentDidUpdate(): void {
    this.checkAuthorization();
  }

  public render(): ReactElement {
    let { Component, pageProps, router } = this.props;

    return (
      <>
        <Header />
        <Component router={router} {...pageProps} />
      </>
    );
  }
}
