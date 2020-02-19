import { ReactElement, FunctionComponent } from 'react';

import style from './header.scss';

import Logo from './../Logo';
import Search from './../Search';
import Nav from './../Nav';

export const Header: FunctionComponent = (): ReactElement => (
  <header className={style.header}>
    <Logo />
    <Search />
    <Nav />
  </header>
);
