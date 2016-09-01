//@flow
import * as podcastsAPI from '../api/podcastsAPI'

const setPodcastEpisodes = (podcast, id) => ({
  type: "SET_PODCAST_EPISODES",
  id,
  podcast
})

const setSearchShows = (shows) => ({
  type: "SET_SEARCH_SHOWS",
  shows
})

const setSearchEpisodes = (episodes) => ({
  type: "SET_SEARCH_EPISODES",
  episodes
})


export const searchPodcasts = (query: string) =>
  (dispatch: Function) =>
    podcastsAPI.searchPodcasts(query)
      .then(([episodes, shows]) => {
        dispatch(setSearchShows(shows))
        dispatch(setSearchEpisodes(episodes))
      })
      .catch(err => console.error(err))

export const getPodcastEpisodes = (feed: string, id: number) =>
  (dispatch: Function) =>
    podcastsAPI.getPodcastEpisodes(feed, id)
      .then(podcasts => dispatch(setPodcastEpisodes(podcasts, id)))
      .catch(err => console.error(err))
