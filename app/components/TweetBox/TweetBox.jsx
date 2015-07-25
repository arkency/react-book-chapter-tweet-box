import React from 'react';

class TweetBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { statusText: '' };
  }

  render() {
    return (<div>
        <TweetBoxStatus />
        <TweetBoxCounter statusText={this.state.statusText} />
        <button type="submit">Submit</button>
      </div>);
    }
}

class TweetBoxStatus extends React.Component {
  render() {
    return null;
  }
}

class TweetBoxCounter extends React.Component {
  render() {
    return null;
  }
}

export default TweetBox;