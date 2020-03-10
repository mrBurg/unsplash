import { Component, ReactElement } from 'react';
import Preloader from '../Preloader';

export class PhotoDetails extends Component {
  render(): ReactElement {
    return (
      <>
        <Preloader />
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
      </>
    );
  }
}
