import { ReactElement, FunctionComponent } from 'react';
import Link from 'next/link';

import style from './header.module.scss';

import Logo from './../../images/logo.svg';
import { URLS } from '../Routes';
import Search from '../Search';
import Nav from '../Nav';
import { HeaderCtxConsumer } from '.';
import { IHeaderCtx } from './context';

export const Header: FunctionComponent = (): ReactElement => {
  return (
    <header className={style.header}>
      <HeaderCtxConsumer>
        {({ token }: IHeaderCtx) => {
          if (token) {
            return (
              <Link href={URLS.HOME}>
                <a>
                  <Logo />
                </a>
              </Link>
            );
          }

          return <Logo />;
        }}
      </HeaderCtxConsumer>
      <Search />
      <Nav />
    </header>
  );
};
