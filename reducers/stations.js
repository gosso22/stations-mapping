const initialState = {
  all: {},
  visible: [],
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
          .filter(station => station.countryId == action.id)
      }
    default:
      return state
  }
}
