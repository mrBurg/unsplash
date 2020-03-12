import { Component, ReactElement } from 'react';
import { inject, observer } from 'mobx-react';

import { IPhotoData } from '../src/interfaces';
import PhotosStore from '../src/stores/PhotosStore';
import { STORE_IDS } from '../src/stores';
import Photos from '../src/components/Photos';
import Preloader from './../src/components/Preloader';

import photosData from './../src/components/Photos/photos.json';

interface IIndexProps {
  photosStore: PhotosStore;
}

interface IIndexState {
  photos?: Array<IPhotoData>;
}

@inject(STORE_IDS.PHOTOS)
@observer
class Index extends Component<IIndexProps, IIndexState> {
  public componentDidMount(): void {
    /* let { photosStore } = this.props;
    photosStore.fetchPhotos((photos: Array<IPhotoData>) => {
      this.setState(state => {
        return {
          ...state,
          photos
        };
      });
    }); */

    setTimeout((): void => {
      let photos: Array<IPhotoData> = photosData;

      this.setState((state: IIndexState) => {
        return {
          ...state,
          photos
        };
      });
    }, 1000);
  }

  public render(): ReactElement {
    if (this.state) {
      let { photos } = this.state;

      return <Photos photos={photos} />;
    }

    return <Preloader />;
  }
}

export default Index;
