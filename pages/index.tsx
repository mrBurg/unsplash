import { Component, ReactElement } from 'react';
import { inject, observer } from 'mobx-react';

import style from './../src/scss/pages/index.scss';

import { IComponentProps } from '../src/interfaces';
import { STORE_IDS } from '../src/stores';
import Preloader from './../src/components/Preloader';

@inject(STORE_IDS.AUTH)
@observer
class Index extends Component<IComponentProps> {
  public render(): ReactElement {
    let {
      authStore: { hasToken }
    } = this.props;

    if (hasToken) {
      return (
        <div className={style.content}>
          <div className='buttons'></div>
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
