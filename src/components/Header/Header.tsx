import Link from 'next/link';
import { ReactElement, FunctionComponent } from 'react';

import style from './header.module.scss';

import Nav, { URLS } from '../Nav';
import Search from '../Search';

const Header: FunctionComponent = (): ReactElement => {
  return (
    <header className={style.header}>
      <Link href={URLS.HOME}>
        <a>
          <img src='/images/logo.png' alt='Logo' />
        </a>
      </Link>
      <Search />
      <Nav />
    </header>
  );
};

export { Header };
