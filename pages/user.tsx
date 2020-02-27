import { Component, ReactElement } from 'react';
import Router from 'next/router';
import { inject, observer } from 'mobx-react';

import { IComponentProps, IComponentState } from '../src/interfaces';
import { URLS } from '../src/components/Routes';
import { STORE_IDS } from '../src/stores';
import Preloader from './../src/components/Preloader';

@inject(STORE_IDS.AUTH, STORE_IDS.USER)
@observer
class User extends Component<IComponentProps> {
  public state: IComponentState = {};

  static getDerivedStateFromProps(props: any, state: any) {
    props.auth.readToken();

    return {
      ...state
    };
  }

  public componentDidMount(): void {
    let { auth } = this.props;

    if (auth.token) {
      this.setState((state: IComponentState) => ({
        ...state,
        token: { ...auth }
      }));
    } else {
      Router.push(URLS.SIGNIN);
    }
  }

  public componentDidUpdate(): void {
    let { auth } = this.props;

    if (!auth.token) {
      Router.push(URLS.SIGNIN);
    }
  }

  public render(): ReactElement {
    console.info('Page User');
    return <Preloader />;
  }
}

export default User;
