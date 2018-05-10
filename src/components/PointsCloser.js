import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const GET_POINTS = gql`
  query pointByPosition(
    $lat_u: Float!,
    $lat_l: Float!,
    $lng_u: Float!,
    $lng_l: Float!
  ){
    pointByPosition(
      latitude_upper: $lat_u,
      latitude_lower: $lat_l,
      longitude_upper: $lng_u,
      longitude_lower: $lng_l
    ){
      id
      name
      latitude
      longitude
    }
  }
`

class PointsCloser extends Component {
  render() {
    console.log("CLOSER", this.props.center)
    const lat_u = this.props.center.lat + 0.007
    const lat_l = this.props.center.lat - 0.007
    const lng_u = this.props.center.lng + 0.007
    const lng_l = this.props.center.lng - 0.007
    return(
      <Query query={GET_POINTS} variables={{lat_u, lat_l, lng_u, lng_l}}>
        {({loading, error, data}) => {
          if(loading) return "Loading..."
          if(error) return "Error D:"
          console.log("CLOSER_D", data);
          this.props.handlePoints(data.pointByPosition, this)
          this.props.flagOff()
          return(<div></div>)
        }}
      </Query>
    )
  }
}

export default PointsCloser
