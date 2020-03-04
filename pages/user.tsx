import { Component, ReactElement } from 'react';
import { inject, observer } from 'mobx-react';

import style from './../src/scss/pages/user.scss';

import { IComponentProps, IComponentState, IUserData } from '../src/interfaces';
import { STORE_IDS } from '../src/stores';
import Preloader from './../src/components/Preloader';

interface IUserProps extends IComponentProps {
  userStore: any;
}

interface IUserState extends IComponentState {
  name: string;
  email: string;
  profile_image: any;
  numeric_id: number;
  username: string;
}

@inject(STORE_IDS.USER)
@observer
class User extends Component<IUserProps, IUserState> {
  public componentDidMount(): void {
    let { userStore } = this.props;

    userStore.fetchUser((userData: IUserData) => {
      this.setState(state => {
        return {
          ...state,
          ...userData
        };
      });
    });
  }

  public render(): ReactElement {
    if (this.state) {
      let {
        name,
        email,
        numeric_id,
        profile_image: { large },
        username
      } = this.state;

      return (
        <div className={style.container}>
          <div className={style.content}>
            <h3 className={style.name}>{name}</h3>
            <div className={style.infoBlock}>
              <figure>
                <img className={style.img} src={large} />
              </figure>
              <div className={style.info}>
                <p className={style.infoData}>
                  UserName: <span className={style.accent}>{username}</span> (
                  {numeric_id})
                </p>
                <p className={style.infoData}>
                  Email: <span className={style.accent}>{email}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return <Preloader />;
  }
}

export default User;
