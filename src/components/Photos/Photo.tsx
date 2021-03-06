import { FunctionComponent, ReactElement, MouseEvent } from 'react';

import style from './photo.scss';

import { IPhotoData } from '../../interfaces';

interface IPhotoProps extends IPhotoData {
  showPhotoDetails: (photoData: IPhotoData) => void;
  likePhoto: (photoID: string) => void;
}

export const Photo: FunctionComponent<IPhotoProps> = (
  props: IPhotoProps
): ReactElement => {
  let {
    id,
    showPhotoDetails,
    likePhoto,
    description,
    urls,
    liked_by_user
  } = props;

  let styleButtonActive: string = liked_by_user
    ? ` ${style.button_active}`
    : '';

  return (
    <figure className={style.figure}>
      <img src={urls!.small} />
      <figcaption
        className={style.figcaption}
        onClick={(): void => {
          showPhotoDetails(props);
        }}
      >
        <div className={style.buttons}>
          <button
            className={`${style.button}${styleButtonActive}`}
            onClick={(event: MouseEvent<Element>): void => {
              event.stopPropagation();

              likePhoto(id);
            }}
          />
        </div>
        {description && <div className={style.description}>{description}</div>}
      </figcaption>
    </figure>
  );
};
