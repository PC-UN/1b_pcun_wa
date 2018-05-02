import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const GET_CAMPAIGNS = gql`
  query{
    allCampaigns{
      _id
      name
    }
  }
`

class Campaigns extends Component {
  render() {
    return(
      <Query query={GET_CAMPAIGNS}>
        {({loading, error, data}) => {
          if(loading) return "Loading..."
          if(error) return "Error" + error
          return(
            <div>
              <div id="camping" className="my-card-header">
                <button className="btn-accordion" data-toggle="collapse"
                  data-target="#collapseTwo" aria-expanded="false"
                  aria-controls="collapseTwo">
                  Campañas
                </button>
              </div>
              <div id="collapseTwo" className="collapse" aria-labelledby="camping" data-parent="#accordionMS">
                <div className="card-body">
                  <hr/>
                  {
                    data.allCampaigns.map(
                      c => (
                        <div key={c._id}>
                          <p>{c.name}</p>
                          <hr/>
                        </div>
                      )
                    )
                  }
                </div>
              </div>
            </div>
          )
        }}
      </Query>
    )
  }
}

export default Campaigns
