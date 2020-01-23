import React, { Component } from 'react';
import Page from '../components/Page';

export default class Counter extends Component {
  render() {
    return <Page title='Index Page' linkTo='/other' />;
  }
}
