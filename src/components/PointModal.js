import React, { Component } from 'react'
import PointQuery from './PointQuery'
import CommentsQuery from './CommentsQuery'
import CommentMutation from './CommentMutation'
import '../styles.css'

class PointModal extends Component {
  render() {
    return(
      <div className="Modal">
        <button onClick={this.props.handleCloseModal} className="Modal-close"></button>
        <div id="modalCard" className="card edge scroll">
          <PointQuery id={this.props.id} handlePoints={this.props.handlePoints}/>
          <CommentsQuery id={this.props.id}/>
          <CommentMutation id={this.props.id}/>
        </div>
      </div>
    )
  }
}

export default PointModal
