import { Component, ReactElement } from 'react';
import { NextComponentType } from 'next';
import Link from 'next/link';
import Router from 'next/router';
import { observer, inject } from 'mobx-react';

import './../../scss/grid.scss';

import { IComponentProps, IComponentState } from '../../interfaces';
import { IRouter } from '../Routes/routes';
import { allRoutes, URLS } from './../Routes';
import { isBrowser } from '../../utils';
import { STORE_IDS } from '../../stores';

import Header from '../Header';
import Preloader from '../Preloader';

interface IPageComponentProps extends IComponentProps {
  Component: NextComponentType;
}

@inject(STORE_IDS.AUTH)
@observer
export class Page extends Component<IPageComponentProps, IComponentState> {
  public state: IComponentState = {};

  public static getDerivedStateFromProps(
    props: IComponentProps,
    state: IComponentState
  ) {
    props.authStore.readToken();

    return {
      ...state
    };
  }

  private redirectToSignin(): void {
    let { router } = this.props;

    if (
      router.route != URLS.SIGNIN &&
      router.route != URLS.SIGNUP &&
      router.route != URLS.OAUTH
    ) {
      Router.push(URLS.SIGNIN);
    }
  }

  public componentDidMount(): void {
    console.info('componentDidMount');

    this.setState((state: IComponentState) => {
      return {
        ...state,
        isCSR: isBrowser
      };
    });
  }

  public componentDidUpdate(): void {
    console.info('componentDidUpdate');
    let { authStore } = this.props;

    if (!authStore.token) {
      this.redirectToSignin();
    }
  }

  public render(): ReactElement {
    let { Component, ...pageProps } = this.props;
    let { isCSR } = this.state;

    if (isCSR) {
      return (
        <>
          <div className='nav'>
            {allRoutes.map((route: IRouter, index: number) => {
              let { href, alias, title } = route;

              return (
                <Link key={index} href={href} as={alias}>
                  <a>{title}</a>
                </Link>
              );
            })}
            <style jsx>
              {`
                .nav {
                  display: inline-flex;
                  justify-content: center;
                }

                a {
                  margin: 0 0.5em;
                }
              `}
            </style>
          </div>
          <Header />
          <Component {...pageProps} />
        </>
      );
    }

    return <Preloader />;
  }
}
