import Link from 'next/link';
import { ReactElement, FunctionComponent } from 'react';

import style from './header.module.scss';

import Logo from './../../images/logo.svg';
import { URLS } from '../Routes';
import Search from '../Search';
import Nav from '../Nav';

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
