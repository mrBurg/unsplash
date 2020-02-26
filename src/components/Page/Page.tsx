import { Component, ReactElement } from 'react';
import { NextComponentType } from 'next';

import './../../scss/grid.scss';

import { IComponentProps } from '../../interfaces';
import Header from '../Header';

interface IPageProps extends IComponentProps {
  Component: NextComponentType;
}

export class Page extends Component<IPageProps> {
  public render(): ReactElement {
    let { Component, ...pageProps } = this.props;

    return (
      <>
        <Header />
        <Component {...pageProps} />
      </>
    );
  }
}
