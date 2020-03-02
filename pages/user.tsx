import { Component, ReactElement } from 'react';
// import { toJS } from 'mobx';
import { inject, observer } from 'mobx-react';

import { IComponentProps, IComponentState } from '../src/interfaces';
import { STORE_IDS } from '../src/stores';
import Preloader from './../src/components/Preloader';

interface IUserProps extends IComponentProps {
  userStore: any;
}

@inject(STORE_IDS.USER)
@observer
class User extends Component<IUserProps, IComponentState> {
  public state: IComponentState = {};

  public componentDidMount(): void {
    let { userStore } = this.props;

    let { user } = userStore;

    // console.info(this.props.userStore.user);

    if (!user) {
      userStore.fetchUser();
    }
  }

  public render(): ReactElement {
    let { userStore } = this.props;

    let { user } = userStore;

    if (user) {
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
