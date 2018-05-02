import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const GET_POINTS = gql`
  query pointByName($name: String!){
    pointByName(name: $name){
      id
      name
      longitude
      latitude
    }
  }
`
class PointsByName extends Component {
  render() {
    const name = this.props.name
    return(
      <Query query={GET_POINTS} variables={{name}}>
        {({loading, error, data}) => {
          if(loading) return "Loading..."
          if(error) return "Error"
          this.props.handlePoints(data.pointByName, this)
          return(<div></div>)
        }}
      </Query>
    )
  }
}

export default PointsByName
