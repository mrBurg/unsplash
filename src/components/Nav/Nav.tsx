import Link from 'next/link';
import { ReactElement, FunctionComponent } from 'react';

import style from './nav.module.scss';
import { routes, IRouter } from './routes';

type TLink = ReactElement | null;

let Links: Function = (): Array<TLink> => {
  return routes.map(
    (route: IRouter, index: number): TLink => {
      let { router, isProtected, alias, title } = route;

      if (!isProtected) {
        return (
          <Link key={index} href={router} as={alias}>
            <a className={style.link}>{title}</a>
          </Link>
        );
      }

      return null;
    }
  );
};

const Nav: FunctionComponent = (): ReactElement => {
  return (
    <nav>
      <Links />
    </nav>
  );
};

export { Nav };
