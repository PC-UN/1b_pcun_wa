import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const POINT_CATEGORY = gql`
  query pointByCategory(
    $category: String!,
    $lat_u: Float!,
    $lat_l: Float!,
    $lng_u: Float!,
    $lng_l: Float!
  ){
    pointByCategory(
      category: $category,
      lat_u: $lat_u,
      lat_l: $lat_l,
      lng_u: $lng_u,
      lng_l: $lng_l
    ){
      id
      name
      latitude
      longitude
    }
  }
`

class PointsByCategory extends Component {
  render() {
    console.log(this.props.center);
    const category = this.props.category
    const lat_u = this.props.center.lat + 0.007
    const lat_l = this.props.center.lat - 0.007
    const lng_u = this.props.center.lng + 0.007
    const lng_l = this.props.center.lng - 0.007
    return(
      <Query query={POINT_CATEGORY} variables={{category, lat_u, lat_l, lng_u, lng_l}}>
        {({loading, error, data}) => {
          if(loading) return "Loading..."
          if(error) return "Error D:"
          this.props.handlePoints(data.pointByCategory, this)
          this.props.flagOff()
          return(<div></div>)
        }}
      </Query>
    )
  }
}

export default PointsByCategory
