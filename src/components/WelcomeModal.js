import React, { Component } from 'react'
import Logo2 from '../images/logo_2.png'
import Logo from '../images/logo.png'
import '../styles.css'

class WelcomeModal extends Component {
  render() {
    //document.getElementById("root").className = "dialogIsOpen";
    //document.getElementById("root").classList.remove("dialogIsOpen");
    return(
      <div className="modal-welcome center">
        <div className="center-vertical">
          <img src={Logo2} width="100" height="100" className="m-0-10 d-inline-block align-top" alt="PC-UN logo" />
          <br/>

          <p className="title-welcome">Bienvenido</p>
          <br/>

          <button
            onClick={() => this.props.handleTypeModal(11)}
            className="btn-welcome"
          >
            Ingresar
          </button>

          <button
            onClick={() => this.props.handleTypeModal(12)}
            className="btn-welcome"
          >
            Registrarse
          </button>
        </div>
      </div>
    )
  }
}

export default WelcomeModal
