import React, { Component, ReactElement } from 'react';
import Router from 'next/router';
import { observer, inject } from 'mobx-react';

import { URLS } from '../src/components/Routes';
import { IComponentProps } from '../src/interfaces';
import { STORE_IDS } from '../src/stores';
import Preloader from '../src/components/Preloader';

@inject(STORE_IDS.AUTH)
@observer
export default class Logout extends Component<IComponentProps> {
  public componentDidMount(): void {
    let { auth } = this.props;

    auth.removeToken();

    Router.push(URLS.SIGNIN);
  }

  public render(): ReactElement {
    return <Preloader />;
  }
}
