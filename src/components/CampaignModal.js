import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import '../styles.css'

const CAMPAIGN_ID = gql`
  query campaignById($id: String!){
    campaignById(id: $id){
      name
      city
      address
      ubication
      created_date
      start_date
      end_date
      status
      program
    }
  }
`

class CampaignModal extends Component {
  render(){
    const id = this.props.id
    return(
      <Query query={CAMPAIGN_ID} variables={{id}}>
        {({loading, error, data}) => {
          if(loading) return "Loading"
          if(error) return "Error D:"
          return(
            <div className="Modal">
              <button onClick={this.props.handleCloseModal} className="Modal-close">
              </button>
                <div className="center-vertical w-100">
                  <div className="pl-100">
                  <h1 className="title-campaign-modal">{data.campaignById.name}</h1>
                  <br/>
                  <br/>
                  <p className="texto-campaign-modal">Ciudad: {data.campaignById.city}</p>
                  <p className="texto-campaign-modal">Dirección: {data.campaignById.address}</p>
                  <p className="texto-campaign-modal">Ubicación: {data.campaignById.ubication}</p>
                  <p className="texto-campaign-modal">Estado: {data.campaignById.status}</p>
                  <p className="texto-campaign-modal">Tipo de residuo: {data.campaignById.program}</p>
                  </div>
              </div>
            </div>

          )
        }}
      </Query>
    )
  }
}

export default CampaignModal
