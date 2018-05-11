import React, { Component } from 'react'
import PointQuery from './PointQuery'
import CommentsQuery from './CommentsQuery'
import CommentMutation from './CommentMutation'
import '../styles.css'

class PointModal extends Component {
  render() {
    return(
      <div className="Modal p-0-20">
        <div className="center-vertical scroll edge">
        <button onClick={this.props.handleCloseModal} className="Modal-close"></button>
        <div id="modalCard" className="card">
          <PointQuery id={this.props.id}/>
          <CommentsQuery id={this.props.id}/>
          <br/>
          <button class="btn btn-default w-12" style={{minHeight:"25px"}} type="submit">
              <i class="material-icons">favorite_border</i>
          </button>
          <br/>
          <CommentMutation id={this.props.id}/>
        </div>
        </div>
      </div>
    )
  }
}

export default PointModal
