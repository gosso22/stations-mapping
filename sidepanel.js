import React from 'react'

import Panel
  from 'react-bootstrap/lib/Panel'
import ListGroup
  from 'react-bootstrap/lib/ListGroup'
import ListGroupItem
  from 'react-bootstrap/lib/ListGroupItem'
import Table
  from 'react-bootstrap/lib/Table'

import { connect } 
  from 'react-redux'
import { selectStation }
  from './actions'

class SidePanel extends React.Component {
  render() {
    const { countries, stations, dispatch, ...props } = this.props
    if (!countries.selected) {
      return <span />
    }
    return (
      <div {...props}>
        <Panel 
          bsStyle = 'info'
          header  = {<span>{countries.selected.name}</span>}>
          <ListGroup fill>
            {stations.visible.map((station, i) => 
              stations.selected && stations.selected.id == station.id ? (
                <ListGroupItem 
                  key     = {i}
                  bsStyle = {'success'}>
                  {station.name}
                </ListGroupItem>
              ) : (
                <ListGroupItem 
                  key     = {i}
                  onClick = {e => dispatch(selectStation(station.id))}>
                  {station.name}
                </ListGroupItem>
              )
            )}
          </ListGroup>
        </Panel>
        {stations.selected && (
          <Panel 
            bsStyle = 'primary'
            header  = {(
              <span>
                <a href='#' onClick={e => dispatch(selectStation(null))} style={{float: 'right'}}>
                  close
                </a>
                {stations.selected.name}
              </span>)}>
            <p style={{marginBottom: 0}}>
              Here goes a short description text for the selected radio station.
            </p>
            <Table fill striped bordered condensed>
              <tbody>
                <tr>
                  <td style={{paddingLeft: '16px'}}>Frequency</td>
                  <td>{stations.selected.frequency}</td>
                </tr>
                <tr>
                  <td style={{paddingLeft: '16px'}}>Population coverage</td>
                  <td>{stations.selected.populationCoverage}</td>
                </tr>
              </tbody>
            </Table>
          </Panel>
        )}
      </div>
    )
  }
}

export default connect(state => ({
  countries: state.countries,
  stations: state.stations,
}))(SidePanel)
