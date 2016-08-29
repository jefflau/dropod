// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchPodcasts, getPodcastEpisodes } from '../../../api/podcastsAPI'

class Home extends Component {
  props: {
    config: Object
  }

  componentDidMount(){
    searchPodcasts('ether review')
    getPodcastEpisodes("http://feeds.soundcloud.com/users/soundcloud:users:26172268/sounds.rss", 899090462)
  }

  render(){

    return (
      <div className="home">
        <h1>Home page for dropod</h1>
      </div>
    )
  }
}


const mapStateToProps = ({ config }) => ({ config })

export default connect(mapStateToProps)(Home)
