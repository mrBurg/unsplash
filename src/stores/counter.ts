import { observable, action, computed } from 'mobx';

export default class Counter {
  @observable counter: number = 0;

  @action
  public increase = (): void => {
    this.counter++;
  };

  @action
  public decrease = (): void => {
    this.counter--;
  };

  @computed
  public get value(): string {
    return 'Counter value ' + this.counter;
  }
}
