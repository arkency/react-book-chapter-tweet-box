import React from "react";
import ReactDOM from "react-dom";
import TweetBox from "./components/TweetBox";

let tweetSubmitted = tweetData => {
  console.log("Tweet Submitted!");
  console.log(tweetData);
};

ReactDOM.render(
  <TweetBox tweetSubmitted={tweetSubmitted} />,
  document.getElementById("root")
);
