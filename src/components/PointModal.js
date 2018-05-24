import React, { Component } from 'react'
import PointQuery from './PointQuery'
import CommentsQuery from './CommentsQuery'
import CommentMutation from './CommentMutation'
import '../styles.css'

class PointModal extends Component {

  render() {
    return(
      <div className="Modal p-0-20">
        <div className="center-vertical scroll">
        <button onClick={this.props.handleCloseModal} className="Modal-close">
        </button>
        <div id="modalCard">
          <PointQuery user_id={this.props.user_id} id={this.props.id}/>

          <CommentsQuery id={this.props.id}/>

          <br/>

          <CommentMutation id={this.props.id}/>
        </div>
        </div>
      </div>
    )
  }
}

export default PointModal
