const initialState = {
  all: {},
  list: [],
  selected: null,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'INIT':
      const { countries } = action.data
      return {
        ...state,
        all: countries,
        list: Object.keys(countries).map(key => countries[key])
      }
    case 'SELECT_COUNTRY':
      return {
        ...state,
        selected: state.all[action.id],
      }
    default:
      return state
  }
}
