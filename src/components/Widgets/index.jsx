import React from 'react'
import {
  TwitterTweetEmbed,
  TwitterTimelineEmbed,
  TwitterShareButton,
} from 'react-twitter-embed'
import SearchIcon from '@material-ui/icons/Search'

import './Widgets.css'

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's Happening</h2>
        <TwitterTweetEmbed tweetId={'933354946111705097'} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="shubham43MP"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={'https://facebook.com/Shubhamjidixit'}
          options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}
        />
      </div>
    </div>
  )
}

export default Widgets
