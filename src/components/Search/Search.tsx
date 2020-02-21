import { Component, ReactElement, FocusEvent } from 'react';

import style from './search.scss';

import { IComponentProps, IComponentState } from '../../interfaces';

interface ISearchState extends IComponentState {
  background: string;
}

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

  render(): ReactElement {
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
}
