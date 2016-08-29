// @flow
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { getPodcastEpisodes } from '../../actions/podcasts'

class SearchResults extends React.Component {
  goToPodcast(feed, id){
    this.props.getPodcastEpisodes(feed, id)
    this.props.router.push({
      pathname: `/podcast/${id}`
    })
  }
  render() {
    return (
      <div className="search">
        {this.props.search.results.map((podcast) =>
          <div onClick={this.goToPodcast.bind(this, podcast.feedUrl, podcast.collectionId)}>
            <h2>{podcast.collectionCensoredName}</h2>
            <h3>{podcast.artistName}</h3>
            <p>{podcast.feedUrl}</p>
          </div>
        )}
      </div>
    )
  }
}

export default connect(({ search }) => ({ search }), { getPodcastEpisodes })(withRouter(SearchResults))
