import { Component } from 'react';
import Router from 'next/router';
import { inject, observer } from 'mobx-react';

import Preloader from './../src/components/Preloader';

import { URLS } from '../src/components/Routes';
import { STORE_IDS } from '../src/stores';
import { IComponentProps } from '../src/interfaces';

@inject(STORE_IDS.AUTH)
@observer
export default class OAuth extends Component<IComponentProps> {
  constructor(props: any) {
    super(props);

    let {
      auth,
      router: { query }
    } = props;

    auth.saveToken = query.code;
  }

  componentDidMount(): void {
    Router.push(URLS.HOME);
  }

  render() {
    return <Preloader />;
  }
}
