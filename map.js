import React from 'react'

import { GoogleMap } 
  from 'react-google-maps'

class Map extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <GoogleMap
        containerProps={{
          ...this.props, 
          style: {
            height: '100%',
          },
        }}
        defaultZoom={8}
        defaultCenter={{ 
          lat: -34.397, 
          lng: 150.644 
        }}
      />
    )
  }
}

export default Map
