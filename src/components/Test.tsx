import { Component } from 'react';

interface IProps {}

interface IState {}

export default class Test extends Component {
  state: IState = {};

  constructor(props: IProps) {
    super(props);
  }

  render() {
    return <h1>Test</h1>;
  }
}

/* import React, { Component } from 'react';
import Link from 'next/link';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class Page extends Component {
  props: any;

  componentDidMount() {
    this.props.store.start();
  }

  componentWillUnmount() {
    this.props.store.stop();
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <nav>
          <Link href={this.props.linkTo}>
            <a>Navigate</a>
          </Link>
        </nav>
      </div>
    );
  }

  return (
      <table>
        <tbody>
          <tr>
            <td>
              <div style={{ display: 'flex' }}>
                <div
                  className={`${style.button} ${style.green}`}
                  onClick={event => clickHandler('green', event)}
                >
                  &lt;&lt;&lt;
                </div>
                <div
                  className={`${style.button} ${style.red}`}
                  onClick={event => clickHandler('red', event)}
                >
                  &lt;&lt;&gt;&gt;
                </div>
                <div
                  className={`${style.button} ${style.blue}`}
                  onClick={event => clickHandler('blue', event)}
                >
                  &gt;&gt;&gt;
                </div>
              </div>
            </td>
          </tr>
          {data.map((show: any, index: number) => {
            return (
              <tr key={index}>
                <td>{show.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
}

export default Page;
 */
