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
    const { country } = this.props
    return (
      <Panel collapsible defaultExpanded header={country.name}>
        <ListGroup fill>
          <ListGroupItem>Item 1</ListGroupItem>
          <ListGroupItem>Item 2</ListGroupItem>
          <ListGroupItem>&hellip;</ListGroupItem>
        </ListGroup>
      </Panel>
    )
  }
}

export default connect(state => ({
  country: state.userSelection.country,
}))(SidePanel)

