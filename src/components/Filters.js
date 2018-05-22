import React, { Component } from 'react';
import '../styles.css'
import PointsByCategory from './PointsByCategory'

class Filters extends Component {

  state = {
    value: 'null',
    flag: false
  }

  handleCheck(value){
    this.setState({
      value: value,
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
        <PointsByCategory
          center={this.props.user_location}
          flagOff={this.flagOff}
          category={this.state.value}
          handlePoints={this.props.handlePoints}
        />
      )
    }
  }

  render() {
    console.log(this.state);
    return(
      <div>
        <div id="points"  className="my-card-header">
          <button className="btn-accordion" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            Filtrar por
          </button>
        </div>
        <div id="collapseFour" className="collapse" aria-labelledby="points" data-parent="#accordionMS">
          <div className="card-body">
            <hr/>
            <h6 className="title white">Tipo de residuo</h6>
            <form action="" className="p-0-10 white">
              <input type="radio" name="category" value="Pilas" onClick={(e) => this.handleCheck(e.target.value)}/>Pilas<br/>
              <input type="radio" name="category" value="Medicamentos" onClick={(e) => this.handleCheck(e.target.value)}/>Medicamentos<br/>
              <input type="radio" name="category" value="Llantas" onClick={(e) => this.handleCheck(e.target.value)}/>Llantas<br/>
              <input type="radio" name="category" value="Plaguicidas" onClick={(e) => this.handleCheck(e.target.value)}/>Plaguicidas<br/>
              <input type="radio" name="category" value="Computadores" onClick={(e) => this.handleCheck(e.target.value)}/>Computadores<br/>
              <input type="radio" name="category" value="Bombillas" onClick={(e) => this.handleCheck(e.target.value)}/>Bombillas<br/>
              <input type="radio" name="category" value="Baterias" onClick={(e) => this.handleCheck(e.target.value)}/>Baterías de Plomo<br/>
            </form>
            <hr/>
          </div>
        </div>
        {this.getPoints(this.state.flag)}
      </div>
    )
  }
}

export default Filters
