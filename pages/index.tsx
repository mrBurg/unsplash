import React, { Component } from 'react';
import Router from 'next/router';
import { URLS } from '../src/components/Nav';
import { inject, observer } from 'mobx-react';

interface IState {}

interface IProps {
  counter: any;
}

@inject('counter')
@observer
class Index extends Component<IProps, IState> {
  public componentDidMount(): void {
    let { isAuth }: any = this.props;

    if (!isAuth) {
      Router.push(URLS.SIGNIN);
    }
  }

  render() {
    let { counter, increase, decrease } = this.props.counter;

    return (
      <div>
        <p className='result'>{counter}</p>
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
}

export default Index;
