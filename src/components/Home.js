import React, { Component } from 'react'
import Navbar from './Navbar'
import Menu from './Menu'
import Map from './Map'
import Modal from './Modal'
import PointModal from './PointModal'

const userData = {
  id: 1,
  name: "Jonathan",
  lastname: "Granados",
  email: "joagranadosme@unal.edu.co",
  img: "yo"
}

const stateMachine = {
  idle: {
    SHOW: 'modal'
  },
  modal: {
    CLOSE: 'idle'
  },
  error: {
    ACCEPT: 'idle'
  }
}

class Home extends Component {

  state = {
    machine_state: 'idle',
    query: '',
    id: 0,
    points: [],
    modalVisible: false,
    typeModal: 0,
    center: {
      lat: 4.61,
      lng: -74.08
    },
    zoom: 13,
    location: false
  }

  command(nextState, action) {
    switch (nextState) {
      case 'idle':
        this.showPoints(action.points)
        break;
      case 'loading':
        this.showLoading(action)
        break;
      case 'error':
        this.showError()
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

  handleCenter = (lat, lng, event) => {
    this.setState({
      center:{
        lat: lat,
        lng: lng
      }
    })
  }

  renderModal(type) {
    switch (type) {
      case 1:
        return(
          <Modal>
            <PointModal
              id={this.state.id}
              handleCloseModal={this.handleCloseModal}
            />
          </Modal>
        )
      default:
      return(<Modal></Modal>)
    }
  }

  render(){
    const currentState = this.state.machine_state
    console.log("STATE:", currentState)
    console.log(this.state.center);
    return(
      <div className="row w-100 p-0 m-0">
        <Navbar
          {...userData}
          handlePoints={this.handlePoints}
        />
        <Menu
          center={this.props.center}
          handleOpenModal={this.handleOpenModal}
        />
        <Map
          zoom={this.state.zoom}
          center={this.state.center}
          points={this.state.points}
          handleOpenModal={this.handleOpenModal}
        />
        {this.renderModal(this.state.typeModal)}
      </div>
    )
  }
}

export default Home
