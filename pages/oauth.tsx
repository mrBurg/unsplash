import { Component } from 'react';
// import Router from 'next/router';
import { inject, observer } from 'mobx-react';

import { ACCESS_KEY, SECRET_KEY, API_REDIRECT } from '../src/constants';
import { IComponentProps } from '../src/interfaces';
import { makeUrl } from '../src/utils';
import { STORE_IDS } from '../src/stores';
import { URLS } from '../src/components/Routes';
// import Preloader from './../src/components/Preloader';
import { ApiRequest } from '../src/apis';

interface IOauthProps extends IComponentProps {
  router: any;
}

@inject(STORE_IDS.AUTH)
@observer
export default class OAuth extends Component<IOauthProps> {
  public state = {};

  static async getDerivedStateFromProps(props: any, state: any): Promise<any> {
    // console.info(props.router.query);
    let URI: string = makeUrl(`${URLS.OAUTH}/token`);

    let queryParams = {
      client_id: ACCESS_KEY,
      client_secret: SECRET_KEY,
      redirect_uri: API_REDIRECT,
      code: props.router.query,
      grant_type: 'authorization_code'
    };

    console.info(URI);
    console.info(queryParams);

    const response = await ApiRequest.post(URI, queryParams);

    return {
      ...state,
      ...response
    };
  }

  private fetchToken = async (code: string): Promise<void> => {
    let URI: string = makeUrl(`${URLS.OAUTH}/token`);

    let queryParams = {
      client_id: ACCESS_KEY,
      client_secret: SECRET_KEY,
      redirect_uri: API_REDIRECT,
      code,
      grant_type: 'authorization_code'
    };

    console.info(URI);
    console.info(queryParams);

    let { auth } = this.props;

    const response = await ApiRequest.post(URI, queryParams);

    auth.saveToken(response.data);
  };

  componentDidMount(): void {
    // Router.push(URLS.HOME);
  }

  render() {
    let {
      router: { query }
    } = this.props;

    console.info(query);
    console.info(this.state, 'STATE');

    return (
      <button
        onClick={() => {
          this.fetchToken(query.code);
        }}
      >
        fetchToken
      </button>
    );
    // return <Preloader />;
  }
}
