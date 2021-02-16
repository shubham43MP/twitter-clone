import React, { useState } from 'react'
import { Button, Avatar } from '@material-ui/core'
import firebase from 'firebase'

import db from '../../firebase'
import './TweetBox.css'

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState('')
  const [tweetImage, setTweetImage] = useState('')

  const sendTweet = (e) => {
    e.preventDefault()
    db.collection('posts').add({
      displayName: 'Shubham Dixit',
      username: 'shubham43MP',
      verified: true,
      text: tweetMessage,
      avatar:
        'https://yt3.ggpht.com/a/AATXAJwSoCmMsUVbQ-BvJrtWN8rS-7-XlTGrLVAzqPU-xqc=s900-c-k-c0xffffffff-no-rj-mo',
      image: tweetImage,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setTweetImage('')
    setTweetMessage('')
  }
  return (
    <div className="tweetBox">
      <form action="">
        <div className="tweetbox__input">
          <Avatar src="https://yt3.ggpht.com/a/AATXAJwSoCmMsUVbQ-BvJrtWN8rS-7-XlTGrLVAzqPU-xqc=s900-c-k-c0xffffffff-no-rj-mo" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's Happening?"
            type="text"
          ></input>
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter Image URL"
          type="text"
        />
        <Button onClick={sendTweet} className="tweetBox__tweetButton">
          Tweet
        </Button>
      </form>
    </div>
  )
}

export default TweetBox
