import { ReactElement, FunctionComponent } from 'react';
import Link from 'next/link';

import LogoImg from './../../images/svg/logo.svg';

import { URLS } from '../Routes';

export const Logo: FunctionComponent = (): ReactElement => (
  <Link href={URLS.HOME}>
    <a>
      <LogoImg />
    </a>
  </Link>
);
