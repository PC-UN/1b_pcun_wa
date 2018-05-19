import React, { Component } from 'react'
import '../styles.css'
import CreateSession from './CreateSession'

class LoginModal extends Component {
  render() {
    return(
      <div className="modal-login center">
        <div className="center-vertical w-90 h-90">
          <h1 className="title-login">Iniciar Sesión</h1>
          <br/>
          <br/>

          <CreateSession
            handleLogin={this.props.handleLogin}
          />

          <button
            onClick={() => this.props.handleTypeModal(12)}
            className="btn-login"
          >
            Registrarse
          </button>
        </div>
      </div>
    )
  }
}

export default LoginModal
