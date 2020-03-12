import { ReactElement, Component } from 'react';
import { observer, inject } from 'mobx-react';

import style from './header.scss';

import { IComponentProps } from '../../interfaces';
import { STORE_IDS } from '../../stores';

import Logo from './../Logo';
import Search from './../Search';
import Nav from './../Nav';

@inject(STORE_IDS.AUTH)
@observer
export class Header extends Component<IComponentProps> {
  public render(): ReactElement {
    let {
      authStore: { hasToken }
    } = this.props;

    return (
      <header className={style.header}>
        <div className={style.content}>
          <div className={style.side}>
            <Logo />
          </div>
          {hasToken && (
            <div className={style.center}>
              <Search />
            </div>
          )}
          <div className={`${style.side} ${style.right}`}>
            <Nav />
          </div>
        </div>
      </header>
    );
  }
}
