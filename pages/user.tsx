import { Component, ReactElement } from 'react';
// import { toJS } from 'mobx';
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
    // let { userStore } = this.props;
    let { userData } = this.state;

    console.info(this.props);

    if (!userData) {
      // userStore.fetchUser();
      // this.setState({ ...toJS(this.props.userStore.user) });
    }
  }

  public render(): ReactElement {
    let { userStore } = this.props;

    console.info(this.state);

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
