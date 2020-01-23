import NextApp from 'next/app';
import { Provider } from 'mobx-react';

import { Store /* fetchInitialStoreState */ } from './../stores/store';
import Index from './index';

import './../src/scss/grid.scss';
import style from './../src/scss/style.module.scss';

function inc() {
  console.info('inc');
}

function dec() {
  console.info('dec');
}

class App extends NextApp {
  state = {
    store: new Store()
  };

  // Fetching serialized(JSON) store state
  /* static async getInitialProps(appContext: any): Promise<any> {
    const appProps = await App.getInitialProps(appContext);
    const initialStoreState = await fetchInitialStoreState();

    return {
      ...appProps,
      initialStoreState
    };
  } */

  // Hydrate serialized state to store
  /* static getDerivedStateFromProps(props: any, state: any) {
    // state.store.hydrate(props.initialStoreState);
    return state;
  } */

  render() {
    return (
      <Provider store={this.state.store}>
        <table>
          <tbody>
            <tr>
              <td>
                <div className={style.button} onClick={dec}>
                  &lt;&lt;&lt;
                </div>
              </td>
              <td>
                <div className={style.button} onClick={inc}>
                  &gt;&gt;&gt;
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <Index />
      </Provider>
    );
  }
}

export default App;
