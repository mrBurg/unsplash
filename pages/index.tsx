import { Component, ReactElement } from 'react';
import { inject, observer } from 'mobx-react';

import style from './../src/scss/pages/index.scss';

import {
  IComponentProps,
  // IPhotosData,
  IComponentState
} from '../src/interfaces';
import { STORE_IDS } from '../src/stores';
// import Preloader from './../src/components/Preloader';
import Photo from '../src/components/Photo';

interface IIndexProps extends IComponentProps {
  mainStore: any;
}

interface IIndexState extends IComponentState {
  name: string;
  email: string;
  profile_image: any;
  numeric_id: number;
  username: string;
}

@inject(STORE_IDS.MAIN)
@observer
class Index extends Component<IIndexProps, IIndexState> {
  /* public componentDidMount(): void {
    let { mainStore } = this.props;
    mainStore.fetchPhotos((photosData: IPhotosData) => {
      this.setState(state => {
        return {
          ...state,
          ...photosData
        };
      });
    });
  } */

  public render(): ReactElement {
    /* if (this.state) {
      console.info(this.state); */

    return (
      <div className={style.content}>
        <Photo />
      </div>
    );
    /* }

    return <Preloader />; */
  }
}

export default Index;
