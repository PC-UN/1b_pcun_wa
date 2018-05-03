import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import '../styles.css'

const GET_FAVORITE = gql`
  query{
    allFavorites{
      id
      comment
      place_id
    }
  }
`

class Favorite extends Component {
  render() {
    return(
      <Query query={GET_FAVORITE}>
        {({loading, error, data}) => {
          if(loading) return "Loading..."
          if(error) return "Error D:"
          console.log("PROPS", this.props);
          return(
            <div>
              <div id="favorites" className="my-card-header">
                <button className="btn-accordion" data-toggle="collapse"
                  data-target="#collapseOne" aria-expanded="false"
                  aria-controls="collapseOne">
                  Mis Puntos Favoritos
                </button>
              </div>
              <div id="collapseOne" className="collapse" aria-labelledby="favorites" data-parent="#accordionMS">
                <div className="card-body">
                  <hr/>
                  {
                    data.allFavorites.map(
                      f => (
                        <div className="pointer bg-green-hv" key={f.id} onClick={(e) => this.props.handleOpenModal(f.id, 1, this.props.center.lat, this.props.center.lng, e)}>
                          <p>{f.comment}</p>
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

export default Favorite
