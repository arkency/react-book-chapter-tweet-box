import React from 'react';

class TweetBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { statusText: '' };

    this.setStatusText = this.setStatusText.bind(this);
  }

  setStatusText(event) {
    let text = event.target.value;
    this.setState({ statusText: text });
  }

  render() {
    return (<div>
        <TweetBoxStatus setStatusText={this.setStatusText} />
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