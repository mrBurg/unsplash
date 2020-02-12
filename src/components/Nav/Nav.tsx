import Link from 'next/link';
import { ReactElement, FunctionComponent } from 'react';

import style from './nav.module.scss';
import { routes } from '../Routes';
import { IRouter } from './../Routes/routes';

import { HeaderCtx } from './../Header';

type TLink = ReactElement | null;

export interface ILinkProps {
  isAuth?: boolean;
}

export const Nav: FunctionComponent = (): ReactElement => {
  return (
    <nav>
      <HeaderCtx.Consumer>
        {({}: ILinkProps): Array<TLink> => {
          return routes.map(
            (route: IRouter, index: number): TLink => {
              let { router, alias, title } = route;

              return (
                <Link key={index} href={router} as={alias}>
                  <a className={style.link}>{title}</a>
                </Link>
              );

              return null;
            }
          );
        }}
      </HeaderCtx.Consumer>
    </nav>
  );
};
