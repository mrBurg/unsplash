import { ReactElement, Component, FunctionComponent } from 'react';
import Link from 'next/link';
import { inject, observer } from 'mobx-react';

import style from './nav.scss';

import { IComponentProps, IComponentState } from '../../interfaces';
import { STORE_IDS } from '../../stores';
import { routes } from '../Routes';
import { IRouter } from './../Routes/routes';

type TLink = ReactElement | null;

interface ILinkProps {
  href: string;
  alias: string;
  title: string;
}

const NavLink: FunctionComponent<ILinkProps> = ({
  href,
  alias,
  title
}: ILinkProps): ReactElement => (
  <Link href={href} as={alias}>
    <a className={style.link}>{title}</a>
  </Link>
);

const Routes: Function = ({ hasToken }: IComponentState): Array<TLink> =>
  routes.map(
    (route: IRouter, index: number): TLink => {
      let { isHidden, isProtected, ...linkData } = route;

      if (isHidden) return null;

      if (isProtected) {
        if (hasToken) {
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
    let { authStore } = this.props;

    return (
      <div className={style.nav}>
        <Routes {...authStore} />
      </div>
    );
  }
}
