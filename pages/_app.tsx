import NextApp, { AppContext, AppInitialProps } from 'next/app';
import fetch from 'isomorphic-unfetch';
import { ReactElement } from 'react';
import { Provider } from 'mobx-react';

import Store, { fetchInitialStoreState } from '../src/stores/store';

import './../src/scss/grid.scss';
import style from './../src/scss/style.module.scss';

import { Header } from '../src/components/Header';

interface IAppProps {
  shows: Array<any>;
}

class App extends NextApp<IAppProps> {
  state = {
    store: new Store()
  };

  static async getInitialProps(
    appContext: AppContext
  ): Promise<AppInitialProps> {
    const appProps = NextApp.getInitialProps(appContext);
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();

    const initialStoreState = await fetchInitialStoreState();

    console.info(initialStoreState, 'getDerivedStateFromProps');

    return {
      shows: data.map((entry: any) => entry.show),
      ...initialStoreState,
      ...appProps
    };
  }

  static getDerivedStateFromProps(props: any, state: any) {
    // state.store.hydrate(props.initialStoreState);

    console.info(props, 'getDerivedStateFromProps');

    return state;
  }

  private renderTable(data: any) {
    function clickHandler(data: any, event: any) {
      console.info(data, event);
    }

    return (
      <table>
        <tbody>
          <tr>
            <td>
              <div style={{ display: 'flex' }}>
                <div
                  className={`${style.button} ${style.green}`}
                  onClick={event => clickHandler('green', event)}
                >
                  &lt;&lt;&lt;
                </div>
                <div
                  className={`${style.button} ${style.red}`}
                  onClick={event => clickHandler('red', event)}
                >
                  &lt;&lt;&gt;&gt;
                </div>
                <div
                  className={`${style.button} ${style.blue}`}
                  onClick={event => clickHandler('blue', event)}
                >
                  &gt;&gt;&gt;
                </div>
              </div>
            </td>
          </tr>
          {data.map((show: any, index: number) => {
            return (
              <tr key={index}>
                <td>{show.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  render(): ReactElement {
    const { Component, pageProps, shows } = this.props;

    return (
      <Provider store={this.state.store}>
        <h1>{`${process.env.HOST}:${process.env.PORT}`}</h1>
        <Header />
        <Component {...pageProps} />
        {this.renderTable(shows)}
      </Provider>
    );
  }
}

export default App;
