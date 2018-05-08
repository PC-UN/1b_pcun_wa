import React, { Component } from 'react'
import '../styles.css'

class WelcomeModal extends Component {
  render() {
    return(
      <div className="Modal">
        Welcome
        <button
          onClick={() => this.props.handleTypeModal(11)}
        >Log_in</button>
        <button
          onClick={() => this.props.handleTypeModal(12)}
        >Sign_in</button>
      </div>
    )
  }
}

export default WelcomeModal
