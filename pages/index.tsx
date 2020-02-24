import { Component, ReactElement } from 'react';
// import Router from 'next/router';
import { inject, observer } from 'mobx-react';
import axios from 'axios';

import style from './../src/scss/pages/index.scss';

import { IComponentState, IComponentProps } from '../src/interfaces';
import { STORE_IDS } from '../src/stores';
import Preloader from './../src/components/Preloader';
import { getURL } from '../src/utils';
// import { isBrowser } from '../src/utils';
// import { ApiRequest } from '../src/apis';
// import { URLS } from '../src/components/Routes';

/* interface IProps {
  counter: any;
  token: string;
} */

@inject(STORE_IDS.AUTH, STORE_IDS.COUNTER)
@observer
class Index extends Component<IComponentProps & { counter: any }> {
  public state: IComponentState = {};

  private async getOauth() {
    let URL: string = '/oauth/token';

    let query = {
      client_id:
        '055022873d112aa5aa5ee75629932fe3b9211adf3c38faec47eda69a5bf919de',
      client_secret:
        'e0166504a3d3b5e317fe2c5951d4586626881a287c8009d0d3aca3c9dc153fc6',
      redirect_uri: 'http://localhost:3000/oauth',
      code: this.props.auth.token,
      grant_type: 'authorization_code'
    };

    let qs: string = getURL(URL);

    const response = await axios({
      method: 'post',
      url: qs,
      data: { ...query }
    });

    console.info(qs);
    console.info(this.props.auth.token);

    this.props.auth.saveToken(response.data.refresh_token);

    // console.info(response.data);
    // this.props.auth.saveToken(response.data.refresh_token);

    // let URL: string = 'https://unsplash.com/oauth/token';
    // const response = await ApiRequest.get(URL);
    /* const response = await ApiRequest.get('oauth/authorize', {
    client_id:
      '055022873d112aa5aa5ee75629932fe3b9211adf3c38faec47eda69a5bf919de',
    client_secret:
      'e0166504a3d3b5e317fe2c5951d4586626881a287c8009d0d3aca3c9dc153fc6',
    redirect_uri: 'http://localhost:3000/oauth',
    code: () => {
      console.info('code');
    },
    grant_type: '1'
  }); */
    /* const response = await ApiRequest.post(URL, {
    client_id:
      '055022873d112aa5aa5ee75629932fe3b9211adf3c38faec47eda69a5bf919de',
    client_secret:
      'e0166504a3d3b5e317fe2c5951d4586626881a287c8009d0d3aca3c9dc153fc6',
    redirect_uri: 'http://localhost:3000/oauth',
    code: '',
    grant_type: ''
  }); */
    // console.info(response);
  }

  public componentDidMount(): void {
    let {
      auth: { token }
    } = this.props;

    if (token) {
      this.setState({
        token
      });
    }
  }

  render(): ReactElement {
    console.info('Page Index');

    let { value, increase, decrease } = this.props.counter;
    let { token } = this.state;

    if (token) {
      return (
        <div className={style.content}>
          <p className='result'>{value}</p>
          <div className='buttons'>
            <button className='button blue' onClick={decrease}>
              &lt;&lt;&lt;
            </button>
            <button onClick={this.getOauth.bind(this)}>POST</button>
            <button className='button green' onClick={increase}>
              &gt;&gt;&gt;
            </button>
          </div>
          <style jsx>{`
            .result,
            .buttons {
              margin-top: 1em;
            }

            .result {
              text-align: center;
            }

            .buttons {
              display: flex;
              justify-content: center;
            }

            .button {
              border-radius: 0.5em;
              color: #fff;
              cursor: pointer;
              padding: 0.5em;
            }

            .green {
              background-color: green;
            }

            .blue {
              background-color: blue;
            }
          `}</style>
        </div>
      );
    }

    return <Preloader />;
  }
}

export default Index;
