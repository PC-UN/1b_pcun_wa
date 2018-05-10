import React, { Component } from 'react'
import Filters from './Filters'
import Favorite from './Favorite'
import Campaigns from './Campaigns'
import PointsCloser from './PointsCloser'
import '../styles.css'

class Menu extends Component {

  state = {
    flag: false
  }

  handleCheck(){
    this.setState({
      flag: true
    })
  }

  flagOff = () => {
    this.setState({
      flag: false
    })
  }

  getPoints(flag){
    if(flag){
      return(
        <PointsCloser
          center={this.props.user_location}
          flagOff={this.flagOff}
          handlePoints={this.props.handlePoints}
        />
      )
    }
  }

  render() {
    return(
      <div id="menu" className="col-4 parent">
        <div id="accordionMS" className="w-95">
          <Filters flag={this.props.flag} user_location={this.props.user_location} handlePoints={this.props.handlePoints} />
          <Favorite id={this.props.id} center={this.props.center} handleOpenModal={this.props.handleOpenModal}/>
          <Campaigns center={this.props.center} handleOpenModal={this.props.handleOpenModal}/>
        </div>
        <div className="absolute w-80 center">
          <button
            className="btn btn-small"
            onClick={() => this.handleCheck()}
          >
            Cerca a mi <i className="material-icons"> my_location</i>
          </button>
        </div>
        {this.getPoints(this.state.flag)}
      </div>
    )
  }
}

export default Menu
