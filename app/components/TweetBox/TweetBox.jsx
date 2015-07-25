import React from 'react';

class TweetBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { statusText: '' };

    this.setStatusText = this.setStatusText.bind(this);
    this.submitTweet = this.submitTweet.bind(this);
    this.statusTextValid = this.statusTextValid.bind(this);
  }

  setStatusText(event) {
    let text = event.target.value;
    this.setState({ statusText: text });
  }

  submitTweet() {
    if (this.statusTextValid()) {
      this.props.tweetSubmitted(this.state.statusText);
    }
  }

  statusTextValid() {
    return this.state.statusText.length > 0 && this.state.statusText <= 140;
  }

  render() {
    return (<div>
        <TweetBoxStatus setStatusText={this.setStatusText} />
        <TweetBoxCounter statusText={this.state.statusText} />
        <button type="submit" onClick={this.submitTweet}>Submit</button>
      </div>);
    }
}

class TweetBoxStatus extends React.Component {
  return (
      <textarea onChange={this.props.setStatusText}
                placeholder="What's happening?" />
  );
}

class TweetBoxCounter extends React.Component {
  render() {
    return null;
  }
}

export default TweetBox;