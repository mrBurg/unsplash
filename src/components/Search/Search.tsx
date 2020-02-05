import { Component, ReactElement, FocusEvent } from 'react';

import style from './search.module.scss';

interface IProps {}

interface IState {
  background: string;
}

export class Search extends Component {
  state: IState = {
    background: style.blur
  };

  static getDerivedStateFromProps({}: IProps, state: IState): IState {
    return state;
  }

  private changeInputBackground = (
    event: FocusEvent<HTMLInputElement>
  ): void => {
    let background: string;

    switch (event.type) {
      case 'focus':
        background = style.focus;
        break;
      case 'blur':
        background = style.blur;
        break;
      default:
        background = style.blur;
    }

    this.setState({
      background
    });
  };

  render(): ReactElement {
    return (
      <div className={`${style.wrapper} ${this.state.background}`}>
        <button className={style.button}>
          <div className={style.icon}></div>
        </button>
        <input
          className={style.input}
          onFocus={this.changeInputBackground}
          onBlur={this.changeInputBackground}
          type='text'
          placeholder='Search'
        />
      </div>
    );
  }
}
