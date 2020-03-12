import { Component, ReactElement } from 'react';

import style from './photos.scss';

import { IPhotoData } from '../../interfaces';
import { Photo } from './Photo';

interface IPhotos {
  photos?: Array<any>;
}

export class Photos extends Component<IPhotos> {
  private renderPhoto(): Array<ReactElement> {
    let { photos } = this.props;

    return photos!.map(
      (photoData: IPhotoData, index: number): ReactElement => {
        photoData.liked_by_user = Math.random() > 0.5;

        return <Photo key={index} {...photoData} />;
      }
    );
  }

  render(): ReactElement {
    return <div className={style.photos}>{this.renderPhoto()}</div>;
  }
}
