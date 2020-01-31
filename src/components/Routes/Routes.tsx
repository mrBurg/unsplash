import React, { Component, ReactElement } from 'react';
import Link from 'next/link';

import style from './routes.module.scss';

interface IRoutes {
  router: string;
  alias: string;
  title: string;
}

const routes: Array<IRoutes> = [
  {
    router: '/',
    alias: '/',
    title: 'Index'
  },
  {
    router: '/home',
    alias: 'home',
    title: 'Home'
  },
  {
    router: '/other',
    alias: 'other',
    title: 'Other'
  }
];

class Routes extends Component {
  render() {
    return routes.map(
      (route: IRoutes, index: number): ReactElement => {
        let { router, alias, title } = route;

        return (
          <Link key={index} href={router} as={alias}>
            <a className={style.link}>{title}</a>
          </Link>
        );
      }
    );
  }
}

export { Routes };
