import React, { Component } from 'react'
import '../styles.css'
import CreateSession from './CreateSession'

class LoginModal extends Component {
  render() {
    return(
      <div className="modal-signin center">
        <div className="center-vertical">
          <h1 className="title-signin">Iniciar Sesión</h1>
          <br/>
          <br/>

          <CreateSession
            handleLogin={this.props.handleLogin}
            handleTypeModal={this.props.handleTypeModal}
          />

          <button
            onClick={() => this.props.handleTypeModal(12)}
            className="btn-signin"
          >
            Registrarse
          </button>
        </div>
      </div>
    )
  }
}

export default LoginModal
