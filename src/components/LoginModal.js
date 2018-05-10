import React, { Component } from 'react'
import '../styles.css'
import CreateSession from './CreateSession'

class LoginModal extends Component {
  render() {
    return(
      <div className="Modal center">
        <div className="center-vertical">
          <h2 className="dark-gray">Iniciar Sesión</h2>
          <br/>
          <br/>

          <CreateSession
            handleLogin={this.props.handleLogin}
            handleTypeModal={this.props.handleTypeModal}
          />

          <button
            onClick={() => this.props.handleTypeModal(12)}
            className="btn btn-default w-80"
          >
            Registrarse
          </button>
        </div>
      </div>
    )
  }
}

export default LoginModal
