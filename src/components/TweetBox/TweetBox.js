import React, { useState } from "react";

function TweetBox(props) {
  const [statusText, updateStatusText] = useState("");

  const setStatusText = event => {
    const text = event.target.value;
    updateStatusText(text);
  };

  const statusTextValid = () =>
    statusText.length > 0 && statusText.length <= 140;

  const submitTweet = () => {
    if (statusTextValid()) {
      props.tweetSubmitted(statusText);
    }
  };

  return (
    <div>
      <TweetBoxStatus setStatusText={setStatusText} />
      <TweetBoxCounter statusText={statusText} />
      <button type="submit" onClick={submitTweet}>
        Submit
      </button>
    </div>
  );
}

function TweetBoxStatus(props) {
  return (
    <textarea onChange={props.setStatusText} placeholder="What's happening?" />
  );
}

function TweetBoxCounter(props) {
  const calculateRemainingCharacters = () => {
    return 140 - props.statusText.length;
  };

  const counterStyles = () => {
    let color = "red";
    const remainingCharacters = calculateRemainingCharacters();
    if (remainingCharacters > 30) {
      color = "green";
    } else if (remainingCharacters > 0) {
      color = "yellow";
    }
    return { color: color };
  };

  return <span style={counterStyles()}>{calculateRemainingCharacters()}</span>;
}

export default TweetBox;
