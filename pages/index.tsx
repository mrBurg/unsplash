import React, { Component } from 'react';
// import Router from 'next/router';
// import { URLS } from '../src/components/Nav';
import { inject, observer } from 'mobx-react';

interface IStore {}

interface IProps {
  counter: any;
}

@inject('counter')
@observer
class Index extends Component<IProps, IStore> {
  render() {
    let { counter, increase, decrease } = this.props.counter;

    // let { router } = this.props;

    // router.push(URLS.SIGNIN);

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
