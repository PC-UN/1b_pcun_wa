import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

const MAKE_COMMENT = gql`
  mutation createComment(
    $point_id: Int!,
    $content: String!,
    $score: Float!
  ){
    createComment(comment:{
      point_id: $point_id
      content: $content
      score: $score
    }){
      _id
    }
  }
`

class CommentMutation extends Component {
  render() {
    let i_content
    return(
      <Mutation mutation={MAKE_COMMENT}>
        {
          createComment => (
            <div className="favorite-div-btn">
              <form
                className="form-inline"
                onSubmit={e => {
                  e.preventDefault()
                  createComment({
                    variables:{
                      point_id: this.props.id,
                      content: i_content.value,
                      score: 5.0
                    }
                  })
                  i_content.value=""
                }}
              >
                <input
                  className="form-control-campaign"
                  ref={
                    content => {i_content = content}
                  }
                />
                <button
                  className="menu-button btn-campaign-comment"
                  type="submit"
                >
                  Comentar
                  <img className="m-0-10" src="https://png.icons8.com/cotton/32/000000/speech-bubble-with-dots.png"/>
                </button>
              </form>
            </div>
          )
        }
      </Mutation>
    )
  }
}

export default CommentMutation
