import { ReactElement, Component, FunctionComponent } from 'react';
import Link from 'next/link';

import style from './nav.scss';

import { IAuthStore } from '../../stores/AuthStore';
import { routes } from '../Routes';
import { IRouter } from './../Routes/routes';

type TLink = ReactElement | null;

interface ILinkProps {
  key: any;
  href: string;
  alias: string;
  title: string;
}

export class Nav extends Component<IAuthStore> {
  private navLink: FunctionComponent<ILinkProps> = ({
    key,
    href,
    alias,
    title
  }: ILinkProps): ReactElement => (
    <li key={key} className={style.nav__item}>
      <Link href={href} as={alias}>
        <a className={style.link}>{title}</a>
      </Link>
    </li>
  );

  private routes: Function = (): Array<TLink> => {
    let {
      authStore: { hasToken }
    } = this.props;

    return routes.map(
      (route: IRouter, index: number): TLink => {
        let { isHidden, isProtected, ...linkData } = route;

        if (isHidden) return null;

        if (isProtected) {
          return hasToken ? this.navLink({ key: index, ...linkData }) : null;
        }

        return this.navLink({ key: index, ...linkData });
      }
    );
  };

  public render(): ReactElement {
    return <ul className={style.nav}>{this.routes()}</ul>;
  }
}
