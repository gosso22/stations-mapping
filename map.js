import React from 'react'

import { GoogleMap, GoogleMapLoader } 
  from 'react-google-maps'

class Map extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <GoogleMapLoader
        containerElement={
          <div {...this.props}
            style={{
              height: '600px',
            }} >
          </div>
        }
        googleMapElement={
          <GoogleMap
            ref={(map) => console.log(map)}
            defaultZoom={8}
            defaultCenter={{ 
              lat: -34.397, 
              lng: 150.644 
            }}
          />
        }
      />
    )
  }
}

export default Map
