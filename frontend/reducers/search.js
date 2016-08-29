// @flow

const initialState = {
  results: [],
  resultsCount: 0
}

function reducer(state: Object = initialState, action: Object = {}){
  switch(action.type) {
    case 'SET_SEARCH_PODCASTS':
      return action.podcasts
    default:
      return state;
  }
}

export default reducer;
