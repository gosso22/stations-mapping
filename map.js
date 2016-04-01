import React from 'react'

import { Map, Marker, Popup, TileLayer } 
  from 'react-leaflet'
import { connect }
  from 'react-redux'

class LeafletMap extends React.Component {
  render() {
    const { stations, countries } = this.props
    const position = countries.selected 
      ? countries.selected.position
      : [-6.00, 35.00]
    return (
      <div style={{border: '1px solid red'}}>
      <Map center={position} zoom={6} style={{height: '600px'}}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {stations.visible.map((station, i) => (
          <Marker key={i} position={station.position}>
            <Popup>
              <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
            </Popup>
          </Marker>
        ))}
      </Map>
      </div>
    )
  }
}

export default connect(state => ({
  stations: state.stations,
  countries: state.countries,
}))(LeafletMap)
