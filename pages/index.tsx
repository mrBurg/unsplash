import { Component, ReactElement } from 'react';
import Router from 'next/router';
import { inject, observer } from 'mobx-react';

import style from './../src/scss/pages/index.scss';

import { IComponentState, IComponentProps } from '../src/interfaces';
import { URLS } from '../src/components/Routes';
import { STORE_IDS } from '../src/stores';
import Preloader from './../src/components/Preloader';

interface IIndexProps extends IComponentProps {
  counter?: any;
}

@inject(STORE_IDS.AUTH, STORE_IDS.COUNTER)
@observer
class Index extends Component<IIndexProps, IComponentState> {
  public state: IComponentState = {};

  static getDerivedStateFromProps(props: IIndexProps, state: IComponentState) {
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
