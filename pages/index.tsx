import { Component, ReactElement } from 'react';
import { inject, observer } from 'mobx-react';

import style from './../src/scss/pages/index.scss';

import { IComponentProps } from '../src/interfaces';
import { STORE_IDS } from '../src/stores';
import Preloader from './../src/components/Preloader';

interface IIndexProps extends IComponentProps {
  counterStore?: any;
}

@inject(STORE_IDS.AUTH, STORE_IDS.COUNTER)
@observer
class Index extends Component<IIndexProps> {
  public render(): ReactElement {
    let { authStore, counterStore } = this.props;

    let { value, increase, decrease } = counterStore;
    let { token } = authStore;

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
