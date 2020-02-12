import { observable, action, computed } from 'mobx';

export default class Counter {
  @observable private _counter: number = 0;

  @action
  public increase = (): void => {
    console.info(this._counter);
    this._counter++;
  };

  @action
  public decrease = (): void => {
    console.info(this._counter);
    this._counter--;
  };

  @computed
  public get value(): string {
    return `Counter value ${this._counter}`;
  }
}
