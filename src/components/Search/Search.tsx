import { Component, ReactElement, FocusEvent } from 'react';
import { observer, inject } from 'mobx-react';

import style from './search.scss';

import { IComponentProps, IComponentState } from '../../interfaces';
import { STORE_IDS } from '../../stores';

interface ISearchState extends IComponentState {
  background: string;
  isBrowser?: any;
}

@inject(STORE_IDS.AUTH)
@observer
export class Search extends Component<IComponentProps, ISearchState> {
  public state: ISearchState = {
    background: style.blur
  };

  private changeInputState = (event: FocusEvent<HTMLInputElement>): void => {
    let background: string;

    switch (event.type) {
      case 'focus':
        background = style.focus;
        break;
      case 'blur':
        background = style.blur;
        break;
      default:
        background = this.state.background;
    }

    this.setState({
      background
    });
  };

  public render(): ReactElement {
    return (
      <div className={`${style.search} ${this.state.background}`}>
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
