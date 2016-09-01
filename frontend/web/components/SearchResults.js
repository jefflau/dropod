// @flow
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { getPodcastEpisodes } from '../../actions/podcasts'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  container: {
    display: 'flex'
  },
  resultContainer: {
    width: '50%'
  }
})

class SearchResults extends React.Component {
  goToPodcast(feed, id){
    this.props.getPodcastEpisodes(feed, id)
    this.props.router.push({
      pathname: `/show/${id}`
    })
  }
  render() {

    console.log(this.props.podcasts, this.props.episodes)
    return (
      <div className={css(styles.container)}>
        <div className={css(styles.resultContainer)}>
          <h2>Shows</h2>
          {this.props.shows.results.map((show) =>
            <div key={show.collectionId} onClick={this.goToPodcast.bind(this, show.feedUrl, show.id)}>
              <h2>{show.title}</h2>
              <h3>{show.description}</h3>
              <p>{show.id}</p>
            </div>
          )}
        </div>
        <div className={css(styles.resultContainer)}>
          <h2>Episodes</h2>
          {this.props.episodes.results.map((episode) =>
            <div key={episode.collectionId} onClick={this.goToPodcast.bind(this, episode.feedUrl, episode.collectionId)}>
              <h2>{episode.title}</h2>
              <h3>{episode.show_title}</h3>
              <p>{episode.id}</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ search }) => ({ shows: search.shows, episodes: search.episodes })

export default connect(mapStateToProps, { getPodcastEpisodes })(withRouter(SearchResults))
