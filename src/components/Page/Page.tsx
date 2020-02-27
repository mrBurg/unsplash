import { Component, ReactElement } from 'react';
import { NextComponentType } from 'next';

import './../../scss/grid.scss';

import { IComponentProps } from '../../interfaces';
import Header from '../Header';
import { allRoutes } from './../Routes/routes';
import Link from 'next/link';
import { IRouter } from '../Routes/routes';

interface IPageProps extends IComponentProps {
  Component: NextComponentType;
}

export class Page extends Component<IPageProps> {
  public render(): ReactElement {
    let { Component, ...pageProps } = this.props;

    return (
      <>
        <Header />
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
        <Component {...pageProps} />
      </>
    );
  }
}
