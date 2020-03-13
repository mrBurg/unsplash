import React, { Component, ReactElement } from 'react';
import Router from 'next/router';
import { observer, inject } from 'mobx-react';

import { IAuthStore } from '../src/stores/AuthStore';
import { URLS } from '../src/components/Routes';
import { STORE_IDS } from '../src/stores';
import Preloader from '../src/components/Preloader';

@inject(STORE_IDS.AUTH)
@observer
export default class Logout extends Component<IAuthStore> {
  public componentDidMount(): void {
    let { authStore } = this.props;

    authStore.removeToken();

    Router.push(URLS.SIGNIN);
  }

  public render(): ReactElement {
    return <Preloader />;
  }
}
