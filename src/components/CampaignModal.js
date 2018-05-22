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
            <div className="Modal p-0-20 center">
              <div className="center-vertical w-100">
                <button onClick={this.props.handleCloseModal} className="Modal-close"></button>
                <div id="modalCard" className="card edge scroll">
                  <h2 className="title-signin">{data.campaignById.name}</h2>
                  {data.campaignById.city}<br/>
                  {data.campaignById.address}<br/>
                  {data.campaignById.ubication}<br/>
                  {data.campaignById.created_date}<br/>
                  {data.campaignById.start_date}<br/>
                  {data.campaignById.end_date}<br/>
                  {data.campaignById.status}<br/>
                  {data.campaignById.program}<br/>
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
