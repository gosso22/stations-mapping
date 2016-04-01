import React     from 'react'
import Map       from './map'
import SidePanel from './sidepanel'

import { connect } 
  from 'react-redux'
import { selectCountry }
  from './actions'

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
  handleSelect(e) {
    console.log(e)
  }
  render() {
    const { countries, dispatch } = this.props
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
              <NavDropdown 
                eventKey = {3} 
                title    = 'Countries' 
                id       = 'basic-nav-dropdown'>
                {countries.map((country, i) => (
                  <MenuItem 
                    key      = {i} 
                    onSelect = {() => dispatch(selectCountry(country.id))}
                    eventKey = {`3.${i}`}>
                    {country.name}
                  </MenuItem>
                ))}
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

export default connect(state => ({
  countries: state.countries
}))(App)

