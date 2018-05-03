import React, { Component } from 'react'

class UserMarker extends Component {
  render() {
    return(
      <div>
        <h6>{this.props.name}</h6>
        <img
          src={this.props.image}
        />
      </div>
    )
  }
}

export default UserMarker
