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
        <div id="modalCard" className="card edge">
          <PointQuery id={this.props.id}/>
          <CommentsQuery id={this.props.id}/>
          <button class="btn btn-small my-2 my-sm-0" type="submit">
            <i class="material-icons">favorite_border</i>
          </button>
          <CommentMutation id={this.props.id}/>

        </div>
      </div>
    )
  }
}

export default PointModal
