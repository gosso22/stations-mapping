import React from 'react'
import Map from './map'

import Navbar 
  from 'react-bootstrap/lib/Navbar'
import Grid
  from 'react-bootstrap/lib/Grid'
import Row
  from 'react-bootstrap/lib/Row'
import Col
  from 'react-bootstrap/lib/Col'

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Navbar inverse fluid fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">FRI Stations Mapping</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <div style={{marginTop: '80px'}}>
          <Grid>
            <Row className='show-grid'>
              <Col xs={12} md={8}>
                <Map />
              </Col>
              <Col xs={6} md={4}>
                Side panel
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    )
  }
}

export default App
