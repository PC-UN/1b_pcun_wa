import React, { Component } from 'react'
import '../styles.css'
import Logo from '../images/logo.png'

class WelcomeModal extends Component {
  render() {
    return(
      <div className="Modal center">
        <div className="center-vertical">
          <img src={Logo} width="60" height="60" className="m-0-10 d-inline-block align-top" alt="PC-UN logo" /><br/>
          <h1 className="dark-gray center-vertical">PC-UN</h1>
          <br/>
          <br/>
          <button
            onClick={() => this.props.handleTypeModal(11)}
            className="btn btn-default w-80"
          >
            Ingresar
          </button>

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

export default WelcomeModal
