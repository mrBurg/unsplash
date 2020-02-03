import { Component, ReactElement, FocusEvent } from 'react';

import style from './search.module.scss';

export class Search extends Component {
  private searchBackground = style.blur;

  private changeInputBackground = (
    event: FocusEvent<HTMLInputElement>
  ): void => {
    switch (event.type) {
      case 'focus':
        this.searchBackground = style.focus;
        break;
      case 'blur':
        this.searchBackground = style.blur;
        break;
    }

    this.forceUpdate();
  };

  render(): ReactElement {
    return (
      <div className={`${style.wrapper} ${this.searchBackground}`}>
        <button className={style.button}>
          <img
            className={style.icon}
            src='/images/icons_32x32.svg'
            alt='Search'
          />
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
