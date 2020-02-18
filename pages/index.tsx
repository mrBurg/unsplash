import React, { Component } from 'react';
// import Router from 'next/router';
import { inject, observer } from 'mobx-react';

import Preloader from './../src/images/svg/Preloader.svg';

import { STORE_IDS } from '../src/stores';
// import { ApiRequest } from '../src/apis';
// import { URLS } from '../src/components/Routes';

interface IState {}

interface IProps {
  counter: any;
  token: string;
}

// async function getOauth() {
// let URL: string =
// 'https://unsplash.com/oauth/authorize?client_id=055022873d112aa5aa5ee75629932fe3b9211adf3c38faec47eda69a5bf919de&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&response_type=code&scope=public+read_user+write_user+read_photos+write_photos+write_likes+write_followers+read_collections+write_collections';
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
// }

@inject(STORE_IDS.COUNTER)
@observer
class Index extends Component<IProps, IState> {
  public componentDidMount(): void {
    // let { isAuth }: any = this.props;
    /* if (!isAuth) {
      Router.push(URLS.SIGNIN);
    } */
  }

  render() {
    console.info('Page Index');

    console.info(this.props);

    let { token } = this.props;
    let { value, increase, decrease } = this.props.counter;

    if (token) {
      return (
        <div>
          <p className='result'>{value}</p>
          <div className='buttons'>
            <button className='button blue' onClick={decrease}>
              &lt;&lt;&lt;
            </button>
            <a href='https://unsplash.com/oauth/authorize?client_id=055022873d112aa5aa5ee75629932fe3b9211adf3c38faec47eda69a5bf919de&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&response_type=code&scope=public+read_user+write_user+read_photos+write_photos+write_likes+write_followers+read_collections+write_collections'>
              Login
            </a>
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
