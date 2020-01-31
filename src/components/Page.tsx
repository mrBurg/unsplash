import React, { Component } from 'react';
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
}

export default Page;
