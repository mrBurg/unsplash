import { ReactElement, Component } from 'react';
import { observer, inject } from 'mobx-react';

import style from './header.scss';

import { IComponentProps, IComponentState } from '../../interfaces';
import { isBrowser } from '../../utils';
import { STORE_IDS } from '../../stores';
import Logo from './../Logo';
import Search from './../Search';
import Nav from './../Nav';

type TStateFromProps = IComponentState | null;

@inject(STORE_IDS.AUTH)
@observer
export class Header extends Component<IComponentProps> {
  public state: IComponentState = {};

  public componentDidMount(): void {
    let {
      auth: { token }
    } = this.props;

    if (token) {
      this.setState({
        token
      });
    }
  }

  public static getDerivedStateFromProps(
    props: IComponentProps,
    state: IComponentState
  ): TStateFromProps {
    if (isBrowser) {
      let { auth } = props;

      return {
        ...state,
        ...auth
      };
    }

    return null;
  }

  render(): ReactElement {
    let { token } = this.state;

    return (
      <header className={style.header}>
        <Logo />
        {token && <Search />}
        <Nav />
      </header>
    );
  }
}
