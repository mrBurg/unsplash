import { Component, ReactElement, FocusEvent } from 'react';
import { inject, observer } from 'mobx-react';

import style from './search.scss';

import { IComponentProps, IComponentState } from '../../interfaces';
import { STORE_IDS } from '../../stores';
import { isBrowser } from '../../utils';

interface ISearchState extends IComponentState {
  background: string;
}

type TStateFromProps = ISearchState | null;

@inject(STORE_IDS.AUTH)
@observer
export class Search extends Component<IComponentProps, ISearchState> {
  public state: ISearchState = {
    background: style.blur
  };

  private changeInputState = (event: FocusEvent<HTMLInputElement>): void => {
    let background: string = this.state.background;

    switch (event.type) {
      case 'focus':
        background = style.focus;
        break;
      case 'blur':
        background = style.blur;
        break;
    }

    this.setState({
      background
    });
  };

  public static getDerivedStateFromProps(
    props: IComponentProps,
    state: ISearchState
  ): TStateFromProps {
    if (isBrowser) {
      let { auth } = props;

      return {
        ...state,
        ...auth
      };
    }

    return null;
  }

  public componentDidMount(): void {
    let {
      auth: { token }
    } = this.props;

    if (token) {
      this.setState({
        token
      });
    }
  }

  render(): ReactElement | null {
    let { token } = this.state;

    if (token) {
      return (
        <div className={`${style.wrapper} ${this.state.background}`}>
          <button className={style.button}>
            <div className={style.icon}></div>
          </button>
          <input
            className={style.input}
            onFocus={this.changeInputState}
            onBlur={this.changeInputState}
            type='text'
            placeholder='Search'
          />
        </div>
      );
    }

    return null;
  }
}
