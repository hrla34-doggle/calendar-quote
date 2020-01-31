import React from 'react';
import TopBar from './TopBar';
import ScrollPage from './ScrollPage';

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>
        <TopBar />
        <ScrollPage />
      </div>
    );
  }
}
