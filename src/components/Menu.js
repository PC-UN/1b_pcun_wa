import React from 'react'
import Filters from './Filters'
import Favorite from './Favorite'
import Campaigns from './Campaigns'
import '../styles.css'

function Menu(props) {
  console.log("MENU PROPS", props);
  return(
    <div id="menu" className="col-4 parent">
      <div id="accordionMS" className="w-95">
        <Filters user_location={props.user_location} handlePoints={props.handlePoints}/>
        <Favorite id={props.id} center={props.center} handleOpenModal={props.handleOpenModal}/>
        <Campaigns center={props.center} handleOpenModal={props.handleOpenModal}/>
      </div>
      <div class="absolute w-80 center">
        <button class="btn btn-small" type="submit">
          Cerca a mi <i className="material-icons"> my_location</i>
        </button>
      </div>
    </div>
  )
}

export default Menu
