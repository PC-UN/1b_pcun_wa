import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const CHECK_SESSION = gql`
  query checkSession(
    $token: String!
  ){
    checkSession(
      token: {
        token: $token
      }
    ){
      id
      username
    }
  }
`

class CheckSession extends Component {
  render() {
    const token = this.props.token
    return(
      <Query query={CHECK_SESSION} variables={{token}}>
        {({loading, error, data}) => {
          if(loading) return "Loading..."
          if(error) return "Error D:"
          console.log("CHECK", data)
          this.props.handleCheck(0, data.checkSession.id, data.checkSession.username)
          return(<div></div>)
        }}
      </Query>
    )
  }
}

export default CheckSession
