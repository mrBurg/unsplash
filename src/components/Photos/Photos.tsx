import { Component, ReactElement, ComponentType } from 'react';
import dynamic from 'next/dynamic';

import style from './photos.scss';

import { IPhotoData } from '../../interfaces';
import { IPhotosStore } from '../../stores/PhotosStore';
import { getPhotoIndex } from '../../utils';
import { Photo } from './Photo';

interface IlikePhoto {
  (photoID: string): void;
}

interface IshowPhotoDetails {
  (photoData: IPhotoData): void;
}

interface IclosePhotoDetails {
  (): void;
}

interface IPhotosState {
  popupData: IPhotoData | null;
}

let DynamicComponent: ComponentType<any> = dynamic((): any =>
  import('./PhotoDetails')
);

export class Photos extends Component<IPhotosStore> {
  public state: IPhotosState = {
    popupData: null
  };

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

  private showPhotoDetails: IshowPhotoDetails = (
    photoData: IPhotoData
  ): void => {
    this.setState((state: IPhotosState) => {
      return {
        ...state,
        popupData: photoData
      };
    });
  };

  private closePhotoDetails: IclosePhotoDetails = (): void => {
    this.setState((state: IPhotosState) => {
      return {
        ...state,
        popupData: null
      };
    });
  };

  public render(): ReactElement {
    let { popupData } = this.state;

    return (
      <div className={style.photos}>
        {this.renderPhotos()}
        {popupData && (
          <DynamicComponent
            {...popupData}
            closePopup={this.closePhotoDetails}
          />
        )}
      </div>
    );
  }
}
