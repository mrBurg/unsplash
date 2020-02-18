import { ReactElement, FunctionComponent, useContext } from 'react';
import Link from 'next/link';

import style from './header.module.scss';

import LogoImg from './../../images/svg/logo.svg';

import { HeaderCtx } from './context';
import { URLS } from '../Routes';
import Search from '../Search';
import Nav from '../Nav';

const Logo: FunctionComponent = (): ReactElement => {
  let { token } = useContext(HeaderCtx);

  if (token) {
    return (
      <Link href={URLS.HOME}>
        <a>
          <LogoImg />
        </a>
      </Link>
    );
  }

  return <LogoImg />;
};

export const Header: FunctionComponent = (): ReactElement => {
  return (
    <header className={style.header}>
      <Logo />
      <Search />
      <Nav />
    </header>
  );
};
