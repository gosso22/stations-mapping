import React from 'react'

import Panel
  from 'react-bootstrap/lib/Panel'
import ListGroup
  from 'react-bootstrap/lib/ListGroup'
import ListGroupItem
  from 'react-bootstrap/lib/ListGroupItem'

import { connect } 
  from 'react-redux'

class SidePanel extends React.Component {
  render() {
    const { countries, stations } = this.props
    if (!countries.selected) {
      return <span />
    }
    return (
      <Panel collapsible defaultExpanded header={countries.selected.name}>
        <ListGroup fill>
          {stations.visible.map((station, i) => (
            <ListGroupItem key={i}>{station.name}</ListGroupItem>
          ))}
        </ListGroup>
      </Panel>
    )
  }
}

export default connect(state => ({
  countries: state.countries,
  stations: state.stations,
}))(SidePanel)
