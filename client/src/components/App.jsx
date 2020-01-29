/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';
import Widget from './Widget.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      trip: {},
    };
  }

  componentDidMount() {
    const { id } = this.props;
    this.getOneTrip(id);
  }

  getOneTrip(id) {
    axios
      .get(`/api/calendar/${id}`)
      .then((response) => {
        this.setState({
          trip: response.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="upper-box">
          <Widget trip={this.state.trip} />
        </div>
        <div className="lower-box">Don't miss out - save your place today</div>
      </div>
    );
  }
}
