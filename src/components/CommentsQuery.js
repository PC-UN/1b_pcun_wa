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

class CommentsQuery extends Component {
  render() {
    const point_id = this.props.id
    return(
      <Query query={GET_COMMENTS} variables={{point_id}}>
        {({loading, error, data}) => {
          if(loading) return "Loading..."
          if(error) return "Error D:"
          console.log("Comments", data.commentByPoint)
          return(
            <div className="p-10 scroll">
            {
              data.commentByPoint.map(
                c => (
                  <div key={c._id}>
                    <p>{c.content}</p>
                    <p>{c.score}</p>
                  </div>
                )
              )
            }
            </div>
          )
        }}
      </Query>
    )
  }
}

export default CommentsQuery
