import React, { Component } from 'react'
import '../styles.css'

class WelcomeModal extends Component {
  render() {
    document.getElementById("root").className = "dialogIsOpen";
    document.getElementById("root").classList.remove("dialogIsOpen");
    return(
      <div className="Modal center">
        <div className="center-vertical">
          <h1 className="dark-gray center-vertical">Welcome</h1>
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
