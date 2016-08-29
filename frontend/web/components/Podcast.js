// @flow
import React from 'react'
import { connect } from 'react-redux'

class Podcast extends React.Component {
  goToPodcast(feed, id){
    this.props.getPodcastEpisodes(feed, id)
  }
  render() {
    const { podcasts, routing } = this.props
    return (
      <div className="podcast">
        {JSON.stringify(podcasts[routing.params.id])}
      </div>
    )
  }
}

// {podcastsReducer.results.map((podcast) =>
//   <div onClick={this.goToPodcast.bind(this, podcast.feedUrl, podcast.collectionId)}>
//     <h2>{podcast.collectionCensoredName}</h2>
//     <h3>{podcast.artistName}</h3>
//     <p>{podcast.feedUrl}</p>
//   </div>
// )}

export default connect(({ podcasts, routing }) => ({ podcasts, routing }))(Podcast)
