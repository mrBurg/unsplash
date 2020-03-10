import { Component, ReactElement } from 'react';
// import Preloader from '../Preloader';

let photo = {
  id: 'LBI7cgq3pbM',
  description: 'A man drinking a coffee.',
  user: {
    name: 'Gilbert Kane',
    profile_image: {
      small:
        'https://images.unsplash.com/face-springmorning.jpg?q=80&fm=jpg&crop=faces&fit=crop&h=32&w=32'
    },
    links: {
      self: 'https://api.unsplash.com/users/poorkane',
      html: 'https://unsplash.com/poorkane'
    }
  },
  urls: {
    raw: 'https://images.unsplash.com/face-springmorning.jpg',
    full: 'https://images.unsplash.com/face-springmorning.jpg?q=75&fm=jpg',
    regular:
      'https://images.unsplash.com/face-springmorning.jpg?q=75&fm=jpg&w=1080&fit=max',
    small:
      'https://images.unsplash.com/face-springmorning.jpg?q=75&fm=jpg&w=400&fit=max',
    thumb:
      'https://images.unsplash.com/face-springmorning.jpg?q=75&fm=jpg&w=200&fit=max'
  }
};

export class Photo extends Component {
  render(): ReactElement {
    let {
      description,
      urls: { thumb }
    } = photo;

    return (
      <>
        <figure>
          <img src={thumb} />
          <figcaption>{description}</figcaption>
          <div>
            <a href=''></a>
            <div>Like</div>
            <div>Collect</div>
          </div>
        </figure>
        <style jsx>{`
          .result,
          .buttons {
            margin-top: 1em;
          }

          .result {
            text-align: center;
          }

          .buttons {
            display: flex;
            justify-content: center;
          }

          .button {
            border-radius: 0.5em;
            color: #fff;
            cursor: pointer;
            padding: 0.5em;
          }

          .green {
            background-color: green;
          }

          .blue {
            background-color: blue;
          }
        `}</style>
      </>
    );
  }
}
