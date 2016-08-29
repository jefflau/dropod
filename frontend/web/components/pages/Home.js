// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchPodcasts } from '../../../actions/podcasts'
import SearchResults from '../SearchResults'
import Podcast from '../Podcast'

class Home extends Component {
  state: {
    searchQuery: string
  }

  props: {
    config: Object,
    searchPodcasts: Function
  }

  constructor(props){
    super(props)
    this.state = {
      searchQuery: ""
    }
  }

  componentDidMount(){
    //getPodcastEpisodes("http://feeds.soundcloud.com/users/soundcloud:users:26172268/sounds.rss", 899090462)
  }

  handleSearchInput(event) {

    this.setState({
      searchQuery: event.target.value
    })
  }

  handleSearchSubmit(event){
    event.preventDefault()
    this.props.searchPodcasts(this.state.searchQuery)
  }

  render(){

    return (
      <div className="home">
        <h1>Home page for dropod</h1>
        <form onSubmit={this.handleSearchSubmit.bind(this)}>
          <input type="search" value={this.state.searchQuery} onChange={this.handleSearchInput.bind(this)}/>
          <button>Search</button>
        </form>
        <SearchResults />
        <Podcast />
      </div>
    )
  }
}


const mapStateToProps = ({ config }) => ({ config })

export default connect(mapStateToProps, { searchPodcasts })(Home)
