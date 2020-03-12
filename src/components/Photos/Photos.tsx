import { Component, ReactElement } from 'react';
// import dynamic from 'next/dynamic';

import style from './photos.scss';

import { IPhotoData } from '../../interfaces';
import { Photo } from './Photo';
import { searchPhotoData } from '../../utils';

interface IPhotos {
  photos?: Array<IPhotoData>;
}

interface IlikePhoto {
  (photoData: IPhotoData): void;
}

export class Photos extends Component<IPhotos> {
  public state: IPhotos = {};

  public static getDerivedStateFromProps(props: any, state: any) {
    return {
      ...state,
      ...props
    };
  }

  private renderPhotos: Function = (): Array<ReactElement> => {
    let { photos } = this.state;

    return photos!.map(
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

  private likePhoto: IlikePhoto = (photoData: IPhotoData): void => {
    let { photos } = this.state;
    let { id } = photoData;
    console.info(searchPhotoData(photos!, id));
  };

  private showPhotoDetails(photoData: IPhotoData): void {
    // const DynamicComponent = dynamic((): any => import('./PhotoDetails'));

    // console.info(DynamicComponent);
    console.info(photoData);
  }

  public componentDidMount() {
    console.info('componentDidMount');
  }

  public componentDidUpdate(prevProps: any, prevState: any) {
    console.info('componentDidUpdate');
    console.info(prevProps);
    console.info(prevState);
  }

  public componentDidCatch() {
    console.info('componentDidCatch');
  }

  public render(): ReactElement {
    return (
      <div className={style.photos}>
        <this.renderPhotos />
      </div>
    );
  }
}
