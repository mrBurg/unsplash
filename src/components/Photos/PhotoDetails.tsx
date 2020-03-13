import { ReactElement, FunctionComponent } from 'react';

import { IPhotoData } from '../../interfaces';

interface IPhotoDetails extends IPhotoData {
  full: any;
  closePopup: any;
}

const PhotoDetails: FunctionComponent<IPhotoDetails> = (
  photoData: IPhotoDetails
): ReactElement => {
  let { alt_description, urls, closePopup } = photoData;

  return (
    <div className='popup' onClick={closePopup}>
      <div className='content'>
        <div className='data'>
          <img src={urls!.regular} />
          <div className='description'>{alt_description}</div>
        </div>
      </div>
      <style jsx>{`
        .popup {
          align-items: center;
          background-color: rgba(0, 0, 0, 0.9);
          cursor: zoom-out;
          display: flex;
          height: 100%;
          justify-content: center;
          left: 0;
          position: absolute;
          top: 0;
          width: 100%;
        }

        .content,
        .data {
          border-radius: 1em;
        }

        .content {
          background-color: #fff;
          height: 60%;
          padding: 1em;
          width: 60%;
        }

        .data {
          height: 100%;
          overflow: hidden;
          position: relative;
          width: 100%;
        }

        img {
          vertical-align: middle;
          width: 100%;
        }

        .description {
          background-color: rgba(255, 255, 255, 0.9);
          bottom: 0;
          box-sizing: border-box;
          left: 0;
          padding: 1em;
          position: absolute;
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default PhotoDetails;
