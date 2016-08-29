// @flow

const initialState = {}

type Action = {
  type: 'SET_PODCAST_EPISODES', podcast: Object, id: string
} | {
  type: any
}

function podcastsReducer(state: {} = initialState, action: Action){
  switch(action.type) {
    case 'SET_PODCAST_EPISODES':
      return {
        ...state,
        [action.id]: action.podcast
      }
    default:
      return state;
  }
}

export default podcastsReducer;
