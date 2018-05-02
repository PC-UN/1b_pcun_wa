import React from 'react';
import '../styles.css'

function Filters(props) {

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
          <form action="#" method="get" className="p-0-10">
            <h6 className="title">Tipo de residuo</h6>
            <div className="form-check fs-13">
              <input className="form-check-input" type="checkbox" value="pilas" id="pilasF" />Pilas
            </div>
            <div className="form-check fs-13">
              <input className="form-check-input" type="checkbox" value="medicamentos" id="medicamentos" />Medicamentos
            </div>
            <div className="form-check fs-13">
              <input className="form-check-input" type="checkbox" value="llantas" id="llantas" />Llantas
            </div>
            <div className="form-check fs-13">
              <input className="form-check-input" type="checkbox" value="plaguicidas" id="plaguicidas" />Plaguicidas
            </div>
            <div className="form-check fs-13">
              <input className="form-check-input" type="checkbox" value="computadores" id="computadores" />Computadores
            </div>
            <div className="form-check fs-13">
              <input className="form-check-input" type="checkbox" value="bombillas" id="bombillas" />Bombillas
            </div>
            <div className="form-check fs-13">
              <input className="form-check-input" type="checkbox" value="bateriasPlomo" id="bateriasPlomo" />Baterías de plomo ácido
            </div>
          </form>
          <hr/>
        </div>
      </div>
    </div>
  )
}

export default Filters
