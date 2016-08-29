//@flow
import Asteroid from './asteroid'
import xmlParser from '../util/xmlParser'

export function searchPodcasts(query: string) {
  return Asteroid.call('searchPodcasts', query)
    .then(res=>console.log(res))
    .catch(err => console.error(err))
}

type podcast = {
  rss: string,
  id: number
}

export function getPodcastEpisodes(rss: string, id: number) {
  return Asteroid.call('getPodcastEpisodes', rss, id)
    .then(res=> {
      return xmlParser(res).then(json =>{
        console.dir(json);
        console.log('Done');
      })
    })
    .catch(err => console.error(err))
}
