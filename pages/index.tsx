import React, { Component } from 'react';
import Router from 'next/router';
import { URLS } from '../src/components/Nav';

function clickHandler() {
  Router.push(URLS.SIGNIN);
}

class Index extends Component {
  render() {
    console.info(this.props);

    // let { router } = this.props;

    // router.push(URLS.SIGNIN);

    return (
      <div>
        <p className='result'>this.props.count}</p>
        <div className='buttons'>
          <button className='button blue' onClick={clickHandler}>
            &lt;&lt;&lt;
          </button>
          <button className='button green'>&gt;&gt;&gt;</button>
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
