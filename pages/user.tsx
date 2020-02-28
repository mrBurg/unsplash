import { Component, ReactElement } from 'react';
import { inject, observer } from 'mobx-react';

import { IComponentProps, IComponentState } from '../src/interfaces';
import { STORE_IDS } from '../src/stores';
import Preloader from './../src/components/Preloader';

interface IUserProps extends IComponentProps {
  user: any;
}

@inject(STORE_IDS.USER)
@observer
class User extends Component<IUserProps, IComponentState> {
  public state: IComponentState = {};

  /* public static async getDerivedStateFromProps(props: any, state: any) {
    let response = await props.user.fetchUser();

    console.info(response);

    return {
      ...state
    };
  } */

  public componentDidMount(): void {
    // let { user } = this.props;
    // user.fetchUser();
  }

  public render(): ReactElement {
    console.info(this.state, 'User State');

    let { user } = this.props;

    console.info(user, 'Page User');

    if (user) {
      return (
        <>
          <h1>Page User</h1>
          <button onClick={this.props.user.fetchUser}>GetUser</button>
        </>
      );
    }

    return <Preloader />;
  }
}

export default User;
