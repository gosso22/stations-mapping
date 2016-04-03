const initialState = {
  all: {},
  visible: [],
  selected: null,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'INIT':
      return {
        ...state,
        all: action.data.stations,
      }
    case 'SELECT_COUNTRY':
      return {
        ...state,
        visible: Object.keys(state.all)
          .map(key => state.all[key])
          .filter(station => station.countryId == action.id),
        selected: null,
      }
    case 'SELECT_STATION':
      return {
        ...state,
        selected: state.all[action.id],
      }
    default:
      return state
  }
}
