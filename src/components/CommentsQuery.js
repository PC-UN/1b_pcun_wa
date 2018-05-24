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
              <div className="comments-div m-20 scroll" style={{maxHeight:"100px"}}>
              {
                data.commentByPoint.map(
                  c => (
                    <div key={c._id}>
                      <p className="texto-campaign-modal">{c.content} {c.score}</p>
                    </div>
                  )
                )
              }
              </div>
            </div>
          )
        }}
      </Query>
    )
  }
}

export default CommentsQuery
