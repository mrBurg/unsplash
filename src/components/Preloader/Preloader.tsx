import { FunctionComponent, ReactElement } from 'react';

import style from './preloader.scss';
import Spinner from './../../images/svg/spinner.svg';

export const Preloader: FunctionComponent = (): ReactElement => (
  <div className={style.preloader}>
    <Spinner />
  </div>
);
