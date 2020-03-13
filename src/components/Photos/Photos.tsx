import { Component, ReactElement } from 'react';

import style from './photos.scss';

import { IPhotoData } from '../../interfaces';
import { IPhotosStore } from '../../stores/PhotosStore';
import { getPhotoIndex } from '../../utils';
import { Photo } from './Photo';

interface IlikePhoto {
  (photoID: string): void;
}

export class Photos extends Component<IPhotosStore> {
  private renderPhotos: Function = (): Array<ReactElement> => {
    let {
      photosStore: { photosData }
    } = this.props;

    return photosData.map(
      (photoData: IPhotoData, index: number): ReactElement => (
        <Photo
          key={index}
          {...photoData}
          showPhotoDetails={this.showPhotoDetails}
          likePhoto={this.likePhoto}
        />
      )
    );
  };

  private likePhoto: IlikePhoto = (photoID: string): void => {
    let {
      photosStore,
      photosStore: { photosData }
    } = this.props;

    let photoDataIndex: number = getPhotoIndex(photosData, photoID);
    let photoData = photosData[photoDataIndex];

    photoData.liked_by_user = !photoData.liked_by_user;
    photosStore.photosData = photosData;
  };

  private showPhotoDetails(photoData: IPhotoData): void {
    // const DynamicComponent = dynamic((): any => import('./PhotoDetails'));

    // console.info(DynamicComponent);
    console.info(photoData);
  }

  public render(): ReactElement {
    return <div className={style.photos}>{this.renderPhotos()}</div>;
  }
}
