import React from 'react'
import Filters from './Filters'
import Favorite from './Favorite'
import Campaigns from './Campaigns'
import '../styles.css'

function Menu(props) {
  return(
    <div id="menu" className="col-4">
      <div id="accordionMS" className="w-100">

        <Filters/>
        <Favorite ceter={props.center} handleOpenModal={props.handleOpenModal}/>
        <Campaigns/>

      </div>
      <div class="rigth">
        <button class="btn btn-small" type="submit">
          Cerca a mi <i className="material-icons"> my_location</i>
        </button>
      </div>

    </div>
  )
}

export default Menu
