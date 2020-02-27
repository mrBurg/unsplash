import { ReactElement, Component, FunctionComponent } from 'react';
import Link from 'next/link';
import { inject, observer } from 'mobx-react';

import style from './nav.scss';

import { IComponentProps, IComponentState } from '../../interfaces';
import { STORE_IDS } from '../../stores';
import { routes } from '../Routes';
import { IRouter } from './../Routes/routes';

type TLink = ReactElement | null;

interface ILink {
  href: string;
  alias: string;
  title: string;
}

const NavLink: FunctionComponent<ILink> = ({
  href,
  alias,
  title
}: ILink): ReactElement => (
  <Link href={href} as={alias}>
    <a className={style.link}>{title}</a>
  </Link>
);

const Routes: Function = ({ token }: IComponentState): Array<TLink> =>
  routes.map(
    (route: IRouter, index: number): TLink => {
      let { isHidden, isProtected, ...linkData } = route;

      if (isHidden) return null;

      if (isProtected) {
        if (token) {
          return <NavLink key={index} {...linkData} />;
        } else return null;
      }

      return <NavLink key={index} {...linkData} />;
    }
  );

@inject(STORE_IDS.AUTH)
@observer
export class Nav extends Component<IComponentProps> {
  public render(): ReactElement {
    let { auth } = this.props;

    return (
      <div className={style.nav}>
        <Routes {...auth} />
      </div>
    );
  }
}
