import React, { useState } from 'react';
import { Tweet } from 'react-twitter-widgets';

const TweetDataDisplay = () => {
  const [tweetData, setTweetData] = useState({
    "comments": {
      "Raze9500": [
        {
          "comment": "It's hilarious seeing a bunch of thugs thinking they can beat a community of Gods...\n\nclearly voting for @MetaTattooClub 💪 https://t.co/Vqfmde8OvP",
          "id": "1636734477949911042"
        }
      ],
      "artsy_skulls": [
        {
          "comment": "Made this for the 1 year anniversary of @thugmonkez. Editions still available at FoFu if someone's interested :)\n\nhttps://t.co/zfK5X9fxGl https://t.co/yBohEV2fVq",
          "id": "1636734282751262722"
        },
        {
          "comment": "Honest vote, shameless shill. Will it count 2x? Or maybe a 3x as I'm a founder being a 1/1 artist :)",
          "id": "1636748101430984704"
        }
      ],
    }
  });

  const extractLinks = (text) => {
    // Matches URLs starting with http or https
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const links = text.match(urlRegex) || [];
    return links;
  }

  const handleCheckboxChange = (username, commentId) => {
    const updatedTweetData = {...tweetData};
    const comments = updatedTweetData.comments[username];
    const comment = comments.find(comment => comment.id === commentId);
    comment.isChecked = !comment.isChecked;
    setTweetData(updatedTweetData);
  }

  return (
    <div style={{ margin: "6rem" }}>
      <h1 style={{ textAlign: "center" }}>March Madness Votes<br />MTC vs TMZ</h1>
      {Object.entries(tweetData.comments).map(([username, comments]) => (
        <div key={username}>
          <h2>{username}'s comments:</h2>
          <ul>
            {comments.map(comment => (
              <li key={comment.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={comment.isChecked}
                    onChange={() => handleCheckboxChange(username, comment.id)}
                  />
                  {comment.comment}
                  {extractLinks(comment.comment).map(link => (
                    <a key={link} href={link}>
                      {link}
                    </a>
                  ))}
                </label>
                <div style={{ marginLeft: '1rem' }}>
                  <Tweet tweetId={comment.id} />
                </div>
              </li>
            ))}
          </ul>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default TweetDataDisplay;      
