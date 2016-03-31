import React from 'react'

import Panel
  from 'react-bootstrap/lib/Panel'
import ListGroup
  from 'react-bootstrap/lib/ListGroup'
import ListGroupItem
  from 'react-bootstrap/lib/ListGroupItem'

class SidePanel extends React.Component {
  render() {
    return (
      <Panel collapsible defaultExpanded header='Tanzania'>
        <ListGroup fill>
          <ListGroupItem>Item 1</ListGroupItem>
          <ListGroupItem>Item 2</ListGroupItem>
          <ListGroupItem>&hellip;</ListGroupItem>
        </ListGroup>
      </Panel>
    )
  }
}

export default SidePanel
