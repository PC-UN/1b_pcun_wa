import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

const MAKE_FAVORITE = gql`
  mutation createFavorite(
    $user_id: Int!,
    $place_id: Int!,
    $comment: String!
  ){
    createFavorite(favorite:{
      user_id: $user_id
      place_id: $place_id
      comment: $comment
    }){
      id
    }
  }
`

class FavoriteMutation extends Component {
  render() {
    console.log(this.props)
    return(
      <Mutation mutation={MAKE_FAVORITE}>
        {
          createFavorite => (
            <div>
              <form
                onSubmit={ e => {
                  e.preventDefault()
                  createFavorite({
                    variables:{
                      user_id: this.props.user_id,
                      place_id: this.props.place_id,
                      comment: this.props.comment
                    }
                  })
                }}
              >
                <button
                  className="btn btn-default w-12"
                  style={{minHeight:"25px"}}
                  type="submit"
                >
                  <img className="shake" src="https://png.icons8.com/cotton/32/000000/like.png"/>
                </button>
              </form>
            </div>
          )
        }
      </Mutation>
    )
  }
}

export default FavoriteMutation
