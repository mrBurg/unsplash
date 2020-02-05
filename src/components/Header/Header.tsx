import Link from 'next/link';
import { ReactElement, FunctionComponent } from 'react';

import style from './header.module.scss';

import Logo from './../../../static/images/logo.svg';
import Search from '../Search';
import Nav, { URLS } from '../Nav';

export const Header: FunctionComponent = (): ReactElement => {
  return (
    <header className={style.header}>
      <Link href={URLS.HOME}>
        <a>
          <Logo />
        </a>
      </Link>
      <Search />
      <Nav />
    </header>
  );
};
