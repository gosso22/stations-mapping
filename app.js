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

const styles = {
  panel: {
    'position' : 'absolute',
    'right'    : '30px',
    'top'      : '80px',
    'width'    : '300px',
    'zIndex'   : 8000,
  },
}

class App extends React.Component {
  render() {
    const { countries, dispatch } = this.props
    return (
      <div style={{height: '100%', paddingTop: '60px'}}>
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
                {countries.list.map((country, i) => (
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
        <div style={{height: '100%'}}>
          <SidePanel style={styles.panel} />
          <Map />
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  countries: state.countries
}))(App)

