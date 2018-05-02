import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const GET_POINT = gql`
  query pointById($id: Int!){
    pointById(id: $id){
      name
      address
      category
      contact
      email
    }
  }
`

class PointQuery extends Component {
  render() {
    console.log(this.props.id)
    const id = this.props.id
    return(
      <Query query={GET_POINT} variables={{id}}>
        {({loading, error, data}) =>{
          if(loading) return "Loading..."
          if(error) return "Error D:"
          return(
            <div>
              <h5>{data.pointById.name}</h5>
              <ul className="list-group list-group-flush">
                <li><h6>Categoría: </h6>{data.pointById.category}</li>
                <li><h6>Dirección: </h6>{data.pointById.address}</li>
                <li><h6>Contacto: </h6>{data.pointById.contact}</li>
                <li><h6>E-mail: </h6>{data.pointById.email}</li>
              </ul>
            </div>
          )
        }}
      </Query>
    )
  }
}

export default PointQuery
