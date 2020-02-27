import { Component, ReactElement } from 'react';
import { inject, observer } from 'mobx-react';

import { IComponentProps } from '../src/interfaces';

import { STORE_IDS } from '../src/stores';

import Preloader from './../src/components/Preloader';

@inject(STORE_IDS.AUTH)
@observer
export default class OAuth extends Component<IComponentProps> {
  public componentDidMount(): void {
    let { auth } = this.props;

    auth.fetchToken();
  }

  public render(): ReactElement {
    return <Preloader />;
  }
}
