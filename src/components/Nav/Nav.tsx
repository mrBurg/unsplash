import { ReactElement, FunctionComponent } from 'react';
import Link from 'next/link';

import style from './nav.scss';

import { routes } from '../Routes';
import { IRouter } from './../Routes/routes';
import { HeaderCtxConsumer } from '../Header';

type TLink = ReactElement | null;

interface ILink {
  href: string;
  alias: string;
  title: string;
}

const NavLink: Function = ({ href, alias, title }: ILink): ReactElement => {
  return (
    <Link href={href} as={alias}>
      <a className={style.link}>{title}</a>
    </Link>
  );
};

export const Nav: FunctionComponent = (): ReactElement => {
  return (
    <nav>
      <HeaderCtxConsumer>
        {({ token }) => {
          return routes.map(
            (route: IRouter, index: number): TLink => {
              let { isHidden, isProtected, ...linkData } = route;

              if (isProtected) {
                if (token) {
                  return <NavLink key={index} {...linkData} />;
                } else return null;
              }

              if (!isHidden) {
                return <NavLink key={index} {...linkData} />;
              }

              return null;
            }
          );
        }}
      </HeaderCtxConsumer>
    </nav>
  );
};
