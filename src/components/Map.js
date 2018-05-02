import React, { Component } from 'react'
import GoogleMap from 'google-map-react'
import Marker from './Marker'
import '../styles.css'

class Map extends Component {

  state = {
    center: {
      lat: 4.61,
      lng: -74.08
    },
    zoom: 13,
    location: false
  }

  render() {
    console.log(this.props.points)
    return(
      <div className="col-8 p-0">
        <div style={{height: '85vh', width: '100%'}}>
          <GoogleMap
            bootstrapURLKeys={{key: "AIzaSyBgsUkN58dnLonRbc5-6LYrfevHrxv-Rx8"}}
            zoom={this.props.zoom}
            center={this.props.center}
          >
            <Marker
              lat={4.61}
              lng={-74.08}
              name={'Tú'}
              image={'http://i.stack.imgur.com/orZ4x.png'}
              handleOpenModal={this.props.handleOpenModal}
              modal={0}
            />
            {
              this.props.points.map(
                m => <Marker
                  {...m}
                  key={m.id}
                  lat={m.latitude}
                  lng={m.longitude}
                  image={'http://maps.google.com/mapfiles/ms/icons/green-dot.png'}
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
