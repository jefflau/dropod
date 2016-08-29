//@flow
import itunesAPI from './itunesAPI'
import feedRead from 'feed-read'
import 'fetch-everywhere'

Meteor.methods({
  connected(){
    return 'getting data from meteor!'
  },
  searchPodcasts(searchTerm){
    return itunesAPI.searchPodcasts(searchTerm)
  },
  getPodcastEpisodes(feedUrl, id){
    return fetch(feedUrl, {
        method: 'get',
        headers: { "Content-Type" : "text/rss+xml" }
      })
      .then(res => res.text())
  }
})
