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
              <h3 className="title-campaign-modal">{data.pointById.name}</h3>
              <ul className="list-group list-group-flush ml-30">
                <li className="texto-campaign-modal"><span style={{fontWeight:"bold"}}>Categoría: </span>{data.pointById.category}</li>
                <li className="texto-campaign-modal"><span style={{fontWeight:"bold"}}>Dirección: </span>{data.pointById.address}</li>
                <li className="texto-campaign-modal"><span style={{fontWeight:"bold"}}>Contacto: </span>{data.pointById.contact}</li>
                <li className="texto-campaign-modal"><span style={{fontWeight:"bold"}}>E-mail: </span>{data.pointById.email}</li>
              </ul>
            </div>
          )
        }}
      </Query>
    )
  }
}

export default PointQuery
