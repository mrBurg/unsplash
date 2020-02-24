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
  render(): ReactElement {
    let {
      auth: { token }
    } = this.props;

    return (
      <header className={style.header}>
        <Logo />
        {token && <Search />}
        <Nav />
      </header>
    );
  }
}
