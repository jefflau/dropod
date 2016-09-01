//@flow
import Asteroid from './asteroid'
import xmlParser from '../util/xmlParser'

// export function searchPodcasts(query: string) {
//   return Asteroid.call('searchPodcasts', query)
// }

export function getPodcastEpisodes(rss: string, id: number) {
  return Asteroid.call('getPodcastEpisodes', rss, id)
    .then(res=> xmlParser(res))
    .catch(err => console.error(err))
}

export function searchPodcasts(query: string) {
  const p1 = Asteroid.call('AudioSearch', 'searchEpisodes', query).then(results => results),
        p2 = Asteroid.call('AudioSearch', 'searchShows', query).then(results => results)
  return Promise.all([p1, p2])
}

export function searchEpisodes(query: string) {
  return Asteroid.call('AudioSearch', 'searchEpisodes', query).then(results => results)
}
