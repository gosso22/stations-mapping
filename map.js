import React from 'react'

import { Map, Marker, Popup, TileLayer } 
  from 'react-leaflet'

class Map extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const position = [51.505, -0.09]
    return (
      <Map center={position} zoom={13}>
      </Map>
    )
  }
}

export default Map
