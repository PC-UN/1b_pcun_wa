import React from 'react'
import Filters from './Filters'
import Favorite from './Favorite'
import Campaigns from './Campaigns'
import '../styles.css'

function Menu(props) {
  console.log("MENU PROPS", props);
  return(
    <div id="menu" className="col-4">
      <div id="accordionMS" className="w-100">

        <Filters user_location={props.user_location} handlePoints={props.handlePoints}/>
        <Favorite center={props.center} handleOpenModal={props.handleOpenModal}/>
        <Campaigns center={props.center} handleOpenModal={props.handleOpenModal}/>

      </div>
    </div>
  )
}

export default Menu
