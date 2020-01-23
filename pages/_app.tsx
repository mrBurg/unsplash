import NextApp from 'next/app';
import { Provider } from 'mobx-react';

import { Store, fetchInitialStoreState } from './../stores/store';

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

  static async getInitialProps(appContext: any) {
    const appProps = await NextApp.getInitialProps(appContext);
    const initialStoreState = await fetchInitialStoreState();

    console.info(appProps, initialStoreState);

    return {
      ...appProps,
      initialStoreState
    };
  }

  static getDerivedStateFromProps(props: any, state: any) {
    state.store.hydrate(props.initialStoreState);

    console.info(props);

    return state;
  }

  render() {
    const { Component, pageProps } = this.props;

    console.info(this.props);

    return (
      <Provider store={this.state.store}>
        <Component {...pageProps} />
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
      </Provider>
    );
  }
}

export default App;
