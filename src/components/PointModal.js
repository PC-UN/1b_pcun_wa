import React, { Component } from 'react'
import PointQuery from './PointQuery'
import CommentsQuery from './CommentsQuery'
import CommentMutation from './CommentMutation'
import '../styles.css'

class PointModal extends Component {
  render() {
    return(
      <div className="Modal p-0-20">
        <div className="center-vertical">
          <button onClick={this.props.handleCloseModal} className="Modal-close"></button>
          <div id="modalCard" className="card edge">
            <PointQuery id={this.props.id}/>
            <div className="rigth w-100">
              <button class="btn btn-default w-12 my-2 my-sm-0">
                  <i class="material-icons">favorite_border</i>
              </button>
            </div>
            <h6>Comentarios:</h6>
            <CommentsQuery id={this.props.id}/>
          </div>
        </div>
      </div>
    )
  }
}

export default PointModal
