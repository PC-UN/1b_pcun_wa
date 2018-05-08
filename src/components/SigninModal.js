import React, { Component } from 'react'
import '../styles.css'
import CreateUser from './CreateUser'

class SigninModal extends Component {
  render() {
    return(
      <div className="Modal">
        <h2>Resgistrarse</h2>
        <CreateUser/>
        <button
          onClick={() => this.props.handleTypeModal(11)}
        >Log_in</button>
      </div>
    )
  }
}

export default SigninModal
