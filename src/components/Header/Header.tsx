import { ReactElement, Component } from 'react';
import { observer, inject } from 'mobx-react';

import style from './header.scss';

import { IAuthStore } from '../../stores/AuthStore';
import { STORE_IDS } from '../../stores';
import Logo from './../Logo';
import Search from './../Search';
import Nav from './../Nav';
import Router from 'next/router';
import { URLS } from '../Routes';

@inject(STORE_IDS.AUTH)
@observer
export class Header extends Component<IAuthStore> {
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
          {hasToken && Router.route == URLS.HOME && (
            <div className={style.center}>
              <Search />
            </div>
          )}
          <div className={`${style.side} ${style.right}`}>
            <Nav {...this.props} />
          </div>
        </div>
      </header>
    );
  }
}
