import { ReactElement, FunctionComponent } from 'react';
import Link from 'next/link';

import style from './logo.scss';

import LogoImg from './../../images/svg/logo.svg';
import { URLS } from '../Routes';

export const Logo: FunctionComponent = (): ReactElement => (
  <Link href={URLS.HOME}>
    <a className={style.logo}>
      <LogoImg />
    </a>
  </Link>
);
