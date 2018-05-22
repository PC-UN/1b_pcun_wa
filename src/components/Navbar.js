import React, { Component } from 'react'
import '../styles.css'
import Logo from '../images/logo.png'
import PointsByName from './PointsByName'

class Navbar extends Component {

  state = {
    flag: false,
    query: '',
    points: ''
  }

  handlePoints = (points, event) => {
    this.setState({
      flag: false,
      points: points
    })
    this.props.handlePoints(points)
  }

  handleSearchClick(event) {
    this.setState({
      flag: true
    })
  }

  handleChangeQuery(value) {
    this.setState({ query: value })
  }

  getPoints(){
    if(this.state.flag===true){
      return(
        <PointsByName
          name={this.state.query}
          handlePoints={this.handlePoints}
        />
      )
    }
  }

  render() {

    let img = this.props.img;
    const Image = require('../images/' + img + '.png');

    return(
      <nav className="navbar navbar-expand navbar-light my-navbar">
        <svg className="svg-white" width="64px" height="61px" viewBox="0 0 64 61" version="1.1">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Recycle" transform="translate(1.000000, 1.000000)" stroke="#525050" stroke-width="2">
                  <path d="M11.3,41 L22.2,41 L22.2,52 L15.6,52 C12.5,51 10.6,46.7 11.4,42 L14.7,32.2" id="Shape"></path>
                  <path d="M15.7,52.7 C5.5,48.6 0.4,41 2.3,36.5 L5.7,28.5" id="Shape"></path>
                  <path d="M4.8,30.4 L0.5,28.6 C0.1,28.5 1.60427227e-14,28.1 0.1,27.7 L14.3,18.6 C14.7,18.4 15.5,18.4 15.8,18.5 L15.8,18.5 C15.8,18.5 16.8,19.2 16.9,19.6 L20.5,35.9 C20.4,36.2 20,36.4 19.6,36.2 L14.7,34" id="Shape"></path>
                  <path d="M53.5,42.8 L49.3,32.2 L59.4,28.1 L61.9,34 C61.6,37.4 58.2,41.7 53.4,42.9 L43.1,42.9 M43.1,52 L51.8,52 C56.9,51.6 61.9,45.2 61.9,34.3" id="Shape"></path>
                  <path d="M46,51.4 L46,57.4 C46,57.8 45.7,58.1 45.3,58.1 L30.5,48.8 C30.1,48.5 29.8,47.8 29.8,47.5 L29.8,47.5 C29.8,47.5 30,46.3 30.5,46.1 L45.3,36.6 C45.7,36.6 46,36.9 46,37.3 L46,42" id="Shape"></path>
                  <path d="M33.2,7.2 L26.5,15.4 L18,8.8 L22.1,3.8 C25.3,2.3 29.9,3.6 33.2,7.2 L39,15.8" id="Shape" ></path>
                  <path d="M22.1,3.8 C31.8,-1.4 40.9,-0.9 43.3,3.5 L47.7,11.2" id="Shape"></path>
                  <path d="M46.6,9.4 L50.7,7.2 C51,7 51.5,7.1 51.6,7.4 L50,23.9 C49.9,24.3 49.4,24.9 49.2,25.1 L49.2,25.1 C49.2,25.1 48,25.5 47.6,25.2 L32.4,17.8 C32.2,17.5 32.4,17.1 32.7,16.9 L36.9,14.6" id="Shape"></path>
              </g>
          </g>
        </svg>
        <span className="title-navbar">PC-UN</span>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <div class="form-inline m-0-50 w-50">
              <input
                class="form-control-navbar mr-sm-2"
                type="text"
                placeholder="Busca un punto..."
                name="search"
                value={this.state.query}
                onChange={e => this.handleChangeQuery(e.target.value)}
              />
              <button className="btn-invisible" onClick={e => this.handleSearchClick()}>
                <img className="reflect-y" src="https://png.icons8.com/cotton/34/000000/detective.png"/>
              </button>
            </div>

          <ul className="navbar-nav  ml-auto">
            <li className="white m-0-10">{this.props.username}</li>
            <li className="nav-item dropdown">
              <a id="profileMenu" className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src={Image} width="40" height="40" alt="UserImg" />
              </a>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="profileMenu">
                <a className="dropdown-item" href="#">Editar</a>
                <a className="dropdown-item" href="#">Cerrar sesión</a>
              </div>
            </li>
          </ul>
        </div>
        {this.getPoints()}
      </nav>
    )
  }
}

export default Navbar
