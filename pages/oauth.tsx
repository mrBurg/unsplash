import { Component, ReactElement } from 'react';
import { inject, observer } from 'mobx-react';

import { IAuthStore } from '../src/stores/AuthStore';
import { STORE_IDS } from '../src/stores';
import Preloader from './../src/components/Preloader';

@inject(STORE_IDS.AUTH)
@observer
export default class OAuth extends Component<IAuthStore> {
  public componentDidMount(): void {
    let { authStore } = this.props;

    authStore.fetchToken();
  }

  public render(): ReactElement {
    return <Preloader />;
  }
}
