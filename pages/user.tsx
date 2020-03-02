import { Component, ReactElement } from 'react';
import { inject, observer } from 'mobx-react';

import { IComponentProps, IComponentState } from '../src/interfaces';
import { STORE_IDS } from '../src/stores';
import Preloader from './../src/components/Preloader';

interface IUserProps extends IComponentProps {
  userStore: any;
}

interface IUserState extends IComponentState {
  userData: any;
}

@inject(STORE_IDS.USER)
@observer
class User extends Component<IUserProps, IUserState> {
  public state: IUserState = {
    userData: null
  };

  public componentDidMount(): void {
    let { userStore } = this.props;

    userStore.fetchUser();

    /*userStore.fetchUser((userData: IUserData) => {
      this.setState({
        userData
      });
    }); */
  }

  public componentDidUpdate(): void {
    console.info(this.props.userStore.user);
    console.info(toJS(this.props.userStore.user));
  }

  public render(): ReactElement {
    let { userStore } = this.props;

    if (userStore.user) {
      return (
        <>
          <h1>Page User</h1>
        </>
      );
    }

    return <Preloader />;
  }
}

export default User;
