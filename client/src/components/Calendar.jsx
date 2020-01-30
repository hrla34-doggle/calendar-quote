import React from 'react';
import TopBar from './TopBar.jsx';
import Carousel from './Carousel.jsx';

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
        <Carousel />
      </div>
    );
  }
}
