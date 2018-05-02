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
    </div>
  )
}

export default Menu
