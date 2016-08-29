// @flow
import 'fetch-everywhere'
const headers = {
  'Content-Type': 'application/json'
}

type API = {
  urls: {
    root: string
  },
  searchPodcasts: Function,

}

const itunesAPI: API = {
  urls: {
    root: 'https://itunes.apple.com/search',
  },
  searchPodcasts(searchTerm): Promise<*>{
    let options = {
      method: 'GET',
      headers,
    }

    let url: string = `${this.urls.root}?term=${searchTerm}&entity=podcast`;

    return fetch(url, options)
             .then(res => res.json())
  }

}

export default itunesAPI;
