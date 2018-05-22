import React, { Component } from 'react'
import Navbar from './Navbar'
import Menu from './Menu'
import Map from './Map'
import Modal from './Modal'
import PointModal from './PointModal'
import CampaignModal from './CampaignModal'
import WelcomeModal from './WelcomeModal'
import LoginModal from './LoginModal'
import SigninModal from './SigninModal'
import ErrorModal from './ErrorModal'
import CheckSession from './CheckSession'

const stateMachine = {
  welcome: {
    LOGIN: 'log_in',
    SIGNIN: 'log_in'
  },
  log_in: {
    ERR: 'error',
    SIGNIN: 'sign_in',
    SUCCESS: 'idle'
  },
  sign_in: {
    ERR: 'error',
    LOGIN: 'log_in'
  },
  idle: {
    SHOW: 'modal'
  },
  error: {
    ACCEPT: 'welcome'
  }
}

class Home extends Component {

  state = {
    machine_state: 'welcome',
    query: '',
    id: 0,
    points: [],
    modalVisible: false,
    typeModal: 10,
    user_location: {
      lat: 4.61,
      lng: -74.08
    },
    center: {
      lat: 4.61,
      lng: -74.08
    },
    zoom: 16,
    token: "",
    user: {
      id: 0,
      username: "",
      img: "yo"
    },
    location: false
  }

  command(nextState, action) {
    switch (nextState) {
      case 'idle':
        this.showPoints(action.points)
        break;
      case 'error':
        this.showError()
        break;
      case 'welcome':
        this.setState({
          typeModal: 10
        })
        break;
      default:
        break;
    }
  }

  transition(action) {
    const currentState = this.state.machine_state
    const nextState = stateMachine[currentState][action.type];
    if(nextState) {
      const newState = this.command(nextState, action)
      this.setState({
        machine_state: nextState,
        ...newState
      })
    }
  }

  handleOpenModal = (id, type, lat, lng, event) => {
    this.setState({
      id: id,
      typeModal: type,
      modalVisible: true,
      center: {
        lat: lat,
        lng: lng
      }
    })
  }

  handleCloseModal = (event) => {
    this.setState({
      id: 0,
      typeModal: 0,
      modalVisible: false
    })
  }

  handlePoints = (points) => {
    this.setState({
      points: points
    })
  }

  handleLocation = (lat, lng) => {
    this.setState({
      user_location:{
        lat: lat,
        lng: lng
      }
    })
  }

  handleTypeModal = (type) => {
    this.setState({
      typeModal: type
    })
  }

  handleLogin = (token) => {
    this.setState({
      token: token,
      typeModal: 13
    })
  }

  handleCheck = (type, id, username) => {
    this.setState({
      typeModal: type,
      user: {
        id: id,
        username: username,
        img: "yo"
      }
    })
  }

  renderModal(type) {
    switch (type) {
      case 1://Point modal
        return(
          <Modal>
            <PointModal
              id={this.state.id}
              handleCloseModal={this.handleCloseModal}
              handlePoints={this.handlePoints}
            />
          </Modal>
        )
      case 2://Campaing modal
        return(
          <Modal>
            <CampaignModal
              id={this.state.id}
              handleCloseModal={this.handleCloseModal}
            />
          </Modal>
        )
      case 10://Welcome Modal
        return(
          <Modal>
            <WelcomeModal
              handleTypeModal={this.handleTypeModal}
            />
          </Modal>

        )
        case 11://Log_in Modal
          return(
            <Modal>
              <LoginModal
                handleLogin={this.handleLogin}
                handleTypeModal={this.handleTypeModal}
              />
            </Modal>
          )
        case 12://Sign_in Modal
          return(
            <Modal>
              <SigninModal
                handleTypeModal={this.handleTypeModal}
              />
            </Modal>
          )
        case 13://Load User Info
          return(
            <CheckSession
              token={this.state.token}
              handleCheck={this.handleCheck}
            />
          )
        case 99://Error Modal
          return(
            <Modal>
              <ErrorModal/>
            </Modal>
          )
      default:
      return(<Modal></Modal>)
    }
  }

  render(){
    const currentState = this.state.machine_state
    //console.log("M_STATE:", currentState)
    //console.log("STATE", this.state)
    return(
      <div className="row w-100 p-0 m-0">
        <Navbar
          {...this.state.user}
          handlePoints={this.handlePoints}
        />
        <Menu
          id={this.state.user.id}
          user_location={this.state.user_location}
          center={this.state.center}
          handleOpenModal={this.handleOpenModal}
          handlePoints={this.handlePoints}
        />
        <Map
          zoom={this.state.zoom}
          user_location={this.state.user_location}
          center={this.state.center}
          points={this.state.points}
          handleOpenModal={this.handleOpenModal}
          handleLocation={this.handleLocation}
        />
        {this.renderModal(this.state.typeModal)}
      </div>
    )
  }
}

export default Home
