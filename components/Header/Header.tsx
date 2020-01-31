import { ReactElement } from 'react';

import { Routes } from './../Routes';

import style from './header.module.scss';

const Header = (): ReactElement => {
  return (
    <header className={style.header}>
      <Routes />
    </header>
  );
};

export { Header };
