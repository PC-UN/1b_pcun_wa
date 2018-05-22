import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import FavoriteMutation from './FavoriteMutation'

const GET_POINT = gql`
  query pointById($id: Int!){
    pointById(id: $id){
      name
      address
      category
      contact
      email
      latitude
      longitude
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
            <div className="p-10">
              <h5>{data.pointById.name}</h5>
              <ul className="list-group list-group-flush ml-30">
                <li><span className="title">Categoría: </span>{data.pointById.category}</li>
                <li><span className="title">Dirección: </span>{data.pointById.address}</li>
                <li><span className="title">Contacto: </span>{data.pointById.contact}</li>
                <li><span className="title">E-mail: </span>{data.pointById.email}</li>
              </ul>
              <FavoriteMutation
                user_id={this.props.user_id}
                place_id={this.props.id}
                comment={data.pointById.name}
              />
            </div>
          )
        }}
      </Query>
    )
  }
}

export default PointQuery
