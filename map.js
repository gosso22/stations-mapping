import React from 'react'

import { Map, Marker, Popup, TileLayer } 
  from 'react-leaflet'
import { connect }
  from 'react-redux'

class LeafletMap extends React.Component {
  getMapProps() {
    const { stations, countries } = this.props
    if (stations.selected) {
      return {
        center: stations.selected.position,
        zoom: 12,
      }
    } else if (countries.selected) {
      return {
        center: countries.selected.position, 
        zoom: 6,
      }
    } else {
      return {
        center: [-6.00, 35.00],
        zoom: 6,
      }
    }
  }
  render() {
    const { stations } = this.props
    const mapProps = this.getMapProps()
    return (
      <Map {...mapProps} style={{height: '100%'}}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {stations.visible.map((station, i) => (
          <Marker key={i} position={station.position}>
            <Popup>
              <span>{station.name}</span>
            </Popup>
          </Marker>
        ))}
      </Map>
    )
  }
}

export default connect(state => ({
  stations: state.stations,
  countries: state.countries,
}))(LeafletMap)
