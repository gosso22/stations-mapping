import React     from 'react'
import Map       from './map'
import SidePanel from './sidepanel'

import Nav
  from 'react-bootstrap/lib/Nav'
import Navbar 
  from 'react-bootstrap/lib/Navbar'
import NavDropdown
  from 'react-bootstrap/lib/NavDropdown'
import MenuItem
  from 'react-bootstrap/lib/MenuItem'
import Grid
  from 'react-bootstrap/lib/Grid'
import Row
  from 'react-bootstrap/lib/Row'
import Col
  from 'react-bootstrap/lib/Col'

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar inverse fluid fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href='#'>FRI Stations Mapping</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavDropdown eventKey={3} title='Countries' id='basic-nav-dropdown'>
                <MenuItem eventKey={3.1}>Tanzania</MenuItem>
                <MenuItem eventKey={3.2}>Ghana</MenuItem>
                <MenuItem eventKey={3.3}>Uganda</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div style={{marginTop: '80px'}}>
          <Grid>
            <Row className='show-grid'>
              <Col xs={12} md={8}>
                <Map />
              </Col>
              <Col xs={6} md={4}>
                <SidePanel />
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    )
  }
}

export default App
