// @flow

const initialState = {
  episodes: {
    results: []
  },
  shows: {
    results: []
  }
}

function reducer(state: Object = initialState, action: Object = {}){
  switch(action.type) {
    case 'SET_SEARCH_SHOWS':
      return {
        ...state,
        shows: action.shows
      }
    case 'SET_SEARCH_EPISODES':
      return {
        ...state,
        episodes: action.episodes
      }
    default:
      return state;
  }
}

export default reducer;
