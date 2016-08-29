//@flow
import * as podcastsAPI from '../api/podcastsAPI'

const setPodcastEpisodes = (podcast, id) => ({
  type: "SET_PODCAST_EPISODES",
  id,
  podcast
})

const setSearchPodcast = (podcasts) => ({
  type: "SET_SEARCH_PODCASTS",
  podcasts
})

export const searchPodcasts = (query: string) =>
  (dispatch: Function) =>
    podcastsAPI.searchPodcasts(query)
      .then(podcasts => dispatch(setSearchPodcast(podcasts)))
      .catch(err => console.error(err))

export const getPodcastEpisodes = (feed: string, id: number) =>
  (dispatch: Function) =>
    podcastsAPI.getPodcastEpisodes(feed, id)
      .then(podcasts => dispatch(setPodcastEpisodes(podcasts, id)))
      .catch(err => console.error(err))
