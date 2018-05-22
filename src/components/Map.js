import React, { Component } from 'react'
import GoogleMap from 'google-map-react'
import Marker from './Marker'
import UserMarker from './UserMarker'
import '../styles.css'

class Map extends Component {

  state = {
			draggable: true,
	}

  onIteraction = (key, props, mouse) => {
    this.setState({
      draggable: false
    })
    this.props.handleLocation(mouse.lat, mouse.lng)
  }

  onIteraction2 = (key, props, mouse) => {
    this.setState({
      draggable: true
    })
  }

  render() {
    console.log(this.props)
    return(
      <div className="col-8 p-0">
        <div style={{height: '85vh', width: '100%'}}>
          <GoogleMap
            bootstrapURLKeys={{key: "AIzaSyBgsUkN58dnLonRbc5-6LYrfevHrxv-Rx8"}}
            zoom={this.props.zoom}
            center={this.props.center}
            draggable={this.state.draggable}
            onChildMouseDown={this.onIteraction}
            onChildMouseUp={this.onIteraction2}
            onChildMouseMove={this.onIteraction}
          >
            <UserMarker
              key={"user"}
              lat={this.props.user_location.lat}
              lng={this.props.user_location.lng}
              name={'Tú'}
              image={'http://i.stack.imgur.com/orZ4x.png'}
              modal={0}
            />
            {
              this.props.points.map(
                m => <Marker
                  {...m}
                  key={m.id}
                  lat={m.latitude}
                  lng={m.longitude}
                  image={"https://png.icons8.com/ultraviolet/30/000000/marker.png"}
                  //image={"https://png.icons8.com/cotton/16/000000/marker.png"}
                  //image={"https://png.icons8.com/nolan/64/000000/marker.png"}
                  handleOpenModal={this.props.handleOpenModal}
                  modal={1}
                />
              )
            }
          </GoogleMap>
        </div>
      </div>
    )
  }

}

export default Map
