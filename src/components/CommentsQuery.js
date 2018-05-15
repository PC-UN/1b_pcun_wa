import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query, Mutation } from 'react-apollo'

const GET_COMMENTS = gql`
  query commentById($point_id: Int!){
    commentByPoint(id: $point_id){
      _id
      content
      score
    }
  }
`

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

class CommentsQuery extends Component {
  render() {
    const point_id = this.props.id
    return(
      <Query query={GET_COMMENTS} variables={{point_id}}>
        {({loading, error, data}) => {
          if(loading) return "Loading..."
          if(error) return "Error D:"
          console.log("Comments", data.commentByPoint)
          let i_content
          return(
            <div>
              <div className="p-10 scroll" style={{maxHeight: "100px"}}>
              {
                data.commentByPoint.map(
                  c => (
                    <div key={c._id}>
                      <p>{c.score + "\t - \t" + c.content}</p>
                    </div>
                  )
                )
              }
              </div>
              <Mutation mutation={MAKE_COMMENT}>
                {
                  createComment => (
                    <div className="p-10">
                      <form
                        className="form-inline m-0-50"
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
                          className="form-control"
                          ref={
                            content => {i_content = content}
                          }
                        />
                        <button
                          className="btn btn-small"
                          type="submit"
                        >
                          Comentar
                        </button>
                      </form>
                    </div>
                  )
                }
              </Mutation>
            </div>
          )
        }}
      </Query>
    )
  }
}

export default CommentsQuery
