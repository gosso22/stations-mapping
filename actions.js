
export function init(data) {
  return {
    type: 'INIT', data
  }
}

export function selectCountry(id) {
  return {
    type: 'SELECT_COUNTRY', id
  }
}
