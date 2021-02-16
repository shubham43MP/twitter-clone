import React, { useState, useEffect } from 'react'
import FlipMove from 'react-flip-move'

import TweetBox from '../TweetBox'
import Post from '../Post'
import './Feed.css'
import db from '../../firebase'

const Feed = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            post: doc.data(),
            postId: doc.id,
          }))
        )
      })
  }, [])

  return (
    <div className="feed">
      <div className="feed_header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <FlipMove>
        {posts &&
          posts.length > 0 &&
          posts.map(({ post, postId }) => {
            const {
              avatar,
              displayName,
              image,
              text,
              username,
              verified,
            } = post
            return (
              <Post
                key={postId}
                displayName={displayName}
                username={username}
                verified={verified}
                text={text}
                avatar={avatar}
                image={image}
              />
            )
          })}
      </FlipMove>
    </div>
  )
}

export default Feed
