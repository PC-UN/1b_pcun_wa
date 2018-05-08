import React, { Component } from 'react'
import '../styles.css'
import CreateUser from './CreateUser'

class SigninModal extends Component {
  render() {
    return(
      <div className="Modal center">
        <div className="center-vertical">
          <h2 className="dark-gray">Resgistrarse</h2>
          <br/>
          <br/>

          <CreateUser/>
          <button
            onClick={() => this.props.handleTypeModal(11)}
            className="btn btn-default"
          >
            Ingresar
          </button>
        </div>
      </div>
    )
  }
}

export default SigninModal
