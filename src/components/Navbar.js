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
      <nav className="navbar p-20 navbar-expand navbar-light bg-green w-100">
        <a className="navbar-brand" href="#">
          <img src={Logo} width="40" height="40" className="m-0-10 d-inline-block align-top" alt="PC-UN logo" />
          PC-UN
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <div className="w-100 form-group">
            <input
              className="w-80 form-control"
              type="text"
              placeholder="Busca un punto..."
              name="search"
              value={this.state.query}
              onChange={e => this.handleChangeQuery(e.target.value)}
            />
            <button
              className="w-12 btn btn-inverse"
              onClick={e => this.handleSearchClick()}
            >
              <i className="material-icons">search</i>
            </button>
          </div>

          <ul className="navbar-nav  ml-auto">
            <li><p>{this.props.name + " " + this.props.lastname}</p></li>
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
