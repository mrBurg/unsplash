import { Component, ReactElement } from 'react';
import Router from 'next/router';
import { inject, observer } from 'mobx-react';

import { ACCESS_KEY, SECRET_KEY, API_REDIRECT } from '../src/constants';
import { URLS } from '../src/components/Routes';
import { IComponentProps } from '../src/interfaces';
import { makeUrl } from '../src/utils';
import { STORE_IDS } from '../src/stores';
import { ApiRequest } from '../src/apis';
import Preloader from './../src/components/Preloader';
import { IRequestOptions } from '../src/apis/ApiRequest';

interface IRouter {
  [key: string]: any;
}

interface IOauthProps extends IComponentProps {
  router: IRouter;
}

interface IFetchToken {
  (): Promise<void>;
}

@inject(STORE_IDS.AUTH)
@observer
export default class OAuth extends Component<IOauthProps> {
  private fetchToken: IFetchToken = async (): Promise<void> => {
    let {
      router: { query }
    } = this.props;

    let URI: string = makeUrl(`${URLS.OAUTH}/token`);

    let queryParams: IRequestOptions = {
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

  public componentDidMount(): void {
    this.fetchToken();
  }

  public render(): ReactElement {
    return <Preloader />;
  }
}
