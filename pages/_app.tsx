import { Component } from 'react';

class MyApp extends Component {
  constructor(props: any) {
    super(props);
    console.info('App');
  }

  render() {
    return <div style={{ color: '#fff' }}>Text</div>;
  }
}

export default MyApp;
