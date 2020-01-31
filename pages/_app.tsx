import NextApp, { AppContext, AppInitialProps } from 'next/app';
import fetch from 'isomorphic-unfetch';
import { ReactElement } from 'react';
// import { Provider } from 'mobx-react';

// import Store, { fetchInitialStoreState } from './../stores/store';
import Store from './../stores/store';

import './../src/scss/grid.scss';
import style from './../src/scss/style.module.scss';

import { Header } from './../components/Header';

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

    console.info(appContext);

    // const initialStoreState = await fetchInitialStoreState();

    return {
      shows: data.map((entry: any) => entry.show),
      ...appProps
    };
  }

  private renderTable(data: any) {
    return (
      <table>
        <tbody>
          <tr>
            <td>
              <div className={style.button}>&lt;&lt;&lt;</div>
            </td>
            <td>
              <div className={style.button}>&gt;&gt;&gt;</div>
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

  /* static getDerivedStateFromProps(props: any, state: any) {
    state.store.hydrate(props.initialStoreState);

    console.info(props);

    return state;
  } */

  /* render() {
    const { Component, pageProps } = this.props;

    console.info(this.props);

    return (
      <Provider store={this.state.store}>
        <Component {...pageProps} />
      </Provider>
    );
  } */

  render(): ReactElement {
    const { Component, pageProps, shows } = this.props;

    return (
      <div>
        <h1>{`${process.env.HOST}:${process.env.PORT}`}</h1>
        <Header />
        <Component {...pageProps} />
        {this.renderTable(shows)}
      </div>
    );
  }
}

export default App;
