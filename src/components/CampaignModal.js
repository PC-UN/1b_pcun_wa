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
            <div className="Modal center p-0-20">
              <div className="center-vertical">
                <button onClick={this.props.handleCloseModal} className="Modal-close"></button>
                <div id="modalCard" className="card edge scroll">
                  {data.campaignById.name}
                  {data.campaignById.city}
                  {data.campaignById.address}
                  {data.campaignById.ubication}
                  {data.campaignById.created_date}
                  {data.campaignById.start_date}
                  {data.campaignById.end_date}
                  {data.campaignById.status}
                  {data.campaignById.program}
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
