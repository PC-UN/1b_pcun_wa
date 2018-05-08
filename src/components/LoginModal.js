import React, { Component } from 'react'
import '../styles.css'
import CreateSession from './CreateSession'

class LoginModal extends Component {
  render() {
    return(
      <div className="Modal">
        <h2>Iniciar Sesión</h2>
        <CreateSession
          handleLogin={this.props.handleLogin}
        />
        <button
          onClick={() => this.props.handleTypeModal(12)}
        >Sign_in</button>
      </div>
    )
  }
}

export default LoginModal
