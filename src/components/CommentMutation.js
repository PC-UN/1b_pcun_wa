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
            <div>
              <form
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
                  ref={
                    content => {i_content = content}
                  }
                />
                <button
                  type="submit"
                >
                  Comentar
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
