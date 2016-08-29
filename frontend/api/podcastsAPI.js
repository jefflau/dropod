//@flow
import Asteroid from './asteroid'
import xmlParser from '../util/xmlParser'

export function searchPodcasts(query: string) {
  return Asteroid.call('searchPodcasts', query)
}

export function getPodcastEpisodes(rss: string, id: number) {
  return Asteroid.call('getPodcastEpisodes', rss, id)
    .then(res=> xmlParser(res))
    .catch(err => console.error(err))
}
