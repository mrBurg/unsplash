import { Component, ReactElement } from 'react';

import style from './photo.scss';

import { IPhotoData } from '../../interfaces';

export class Photo extends Component<IPhotoData> {
  render(): ReactElement {
    let {
      description,
      urls: { small },
      liked_by_user
    } = this.props;

    let styleButtonActive: string = liked_by_user
      ? ` ${style.button_active}`
      : '';

    return (
      <figure className={style.figure}>
        <img src={small} />
        <figcaption className={style.figcaption}>
          <div className={style.buttons}>
            <button className={`${style.button}${styleButtonActive}`} />
          </div>
          {description && (
            <div className={style.description}>{description}</div>
          )}
        </figcaption>
      </figure>
    );
  }
}
