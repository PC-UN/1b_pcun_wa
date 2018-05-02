import React, { Component } from 'react'

class Marker extends Component {
  render() {
    return(
      <div onClick={(e) => this.props.handleOpenModal(this.props.id, this.props.modal, this.props.latitude, this.props.longitude, e)}>
        <h6>{this.props.name}</h6>
        <img
          src={this.props.image}
        />
      </div>
    )
  }
}

export default Marker
