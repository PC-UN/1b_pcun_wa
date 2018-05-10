import React, { Component } from 'react'
import '../styles.css'

class ErrorModal extends Component {
  render() {
    console.log(this.props.error);
    return(
      <div className="Modal center">
        <div className="center-vertical">
          <h1>

          </h1>
          <p>
            {"" + this.props.error}
          </p>

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

export default ErrorModal
