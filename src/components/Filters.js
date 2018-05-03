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

  getPoints(){
    if(this.state.flag){
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
            <h6 className="title">Tipo de residuo</h6>
            <form action="" className="p-0-10">
              <input type="radio" name="category" value="Pilas" onClick={(e) => this.handleCheck(e.target.value)}/>Pilas<br/>
              <input type="radio" name="category" value="Medicamentos" onClick={(e) => this.handleCheck(e.target.value)}/>Medicamentos<br/>
            </form>
            <hr/>
          </div>
        </div>
        {this.getPoints()}
      </div>
    )
  }
}

export default Filters
