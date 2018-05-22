import React, { Component } from 'react'
import '../styles.css'
import CreateUser from './CreateUser'

class SigninModal extends Component {
  render() {
    return(
      <div className="modal-signin center">
        <div className="center-vertical">
          <h1 className="title-signin">Registrarse</h1>
          <br/>
          <br/>

          <CreateUser
            handleTypeModal={this.props.handleTypeModal}
          />

          <button
            onClick={() => this.props.handleTypeModal(11)}
            className="btn-signin"
          >
            Ingresar
          </button>
        </div>
      </div>
    )
  }
}

export default SigninModal
