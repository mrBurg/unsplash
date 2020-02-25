import { Component } from 'react';
import Router from 'next/router';
import { inject, observer } from 'mobx-react';

import { ACCESS_KEY, SECRET_KEY, API_REDIRECT } from '../src/constants';
import { IComponentProps } from '../src/interfaces';
import { makeUrl } from '../src/utils';
import { STORE_IDS } from '../src/stores';
import { ApiRequest } from '../src/apis';
import { URLS } from '../src/components/Routes';
import Preloader from './../src/components/Preloader';

interface IOauthProps extends IComponentProps {
  router: any;
}

@inject(STORE_IDS.AUTH)
@observer
export default class OAuth extends Component<IOauthProps> {
  private fetchToken = async (): Promise<void> => {
    let {
      router: { query }
    } = this.props;

    let URI: string = makeUrl(`${URLS.OAUTH}/token`);

    let queryParams = {
      client_id: ACCESS_KEY,
      client_secret: SECRET_KEY,
      redirect_uri: API_REDIRECT,
      code: query.code,
      grant_type: 'authorization_code'
    };

    let { auth } = this.props;

    const response = await ApiRequest.post(URI, queryParams);

    await auth.saveToken(response.access_token);

    Router.push(URLS.HOME);
  };

  componentDidMount(): void {
    this.fetchToken();
  }

  render() {
    return <Preloader />;
  }
}
