import React, { Component } from 'react'

class Marker extends Component {
  render() {
    return(
      <a href="#" data-toggle="tooltip" title={this.props.name}>
        <div className="pointer" onClick={(e) => this.props.handleOpenModal(this.props.id, this.props.modal, this.props.latitude, this.props.longitude, e)}>
          <img
            src={this.props.image}
          />
        </div>
      </a>
    )
  }
}

export default Marker
