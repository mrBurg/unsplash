import { Component, ReactElement } from 'react';
import { inject, observer } from 'mobx-react';

import { IPhotosStore } from '../src/stores/PhotosStore';
import { STORE_IDS } from '../src/stores';
import Photos from '../src/components/Photos';
import Preloader from './../src/components/Preloader';

@inject(STORE_IDS.PHOTOS)
@observer
export default class Index extends Component<IPhotosStore> {
  public componentDidMount(): void {
    let { photosStore } = this.props;

    photosStore.fetchPhotos();
  }

  public render(): ReactElement {
    let { photosData } = this.props.photosStore;

    if (photosData) return <Photos {...this.props} />;

    return <Preloader />;
  }
}
