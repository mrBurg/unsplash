import { Component, ReactElement } from 'react';
import Router from 'next/router';
import { inject, observer } from 'mobx-react';

import { IComponentProps, IComponentState } from '../src/interfaces';
import { STORE_IDS } from '../src/stores';
import { URLS } from '../src/components/Routes';

@inject(STORE_IDS.AUTH, STORE_IDS.COUNTER)
@observer
export default class User extends Component<IComponentProps> {
  public componentDidMount(): void {
    let { auth } = this.props;

    if (auth.hasToken) {
      this.setState((state: IComponentState) => ({ ...state, ...auth }));
    } else {
      Router.push(URLS.SIGNIN);
    }
  }

  public componentDidUpdate(): void {
    let { auth } = this.props;

    if (!auth.hasToken) {
      Router.push(URLS.SIGNIN);
    }
  }

  public render(): ReactElement {
    console.info('Page User');
    return <h1>User</h1>;
  }
}
