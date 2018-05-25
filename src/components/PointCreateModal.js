import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import '../styles.css'

const CREATE_POINT = gql`
  mutation createPoint(
    $name: String!,
    $address: String!,
    $category: String!,
    $contact: String!,
    $email: String!,
    $latitude: Float!,
    $longitude: Float!,
    $business_hours: String!,
    $city: String!,
    $departament: String!
  ){
    createPoint(point:{
      name: $name,
      address: $address,
      category: $category,
      contact: $contact,
      email: $email,
      latitude: $latitude,
      longitude: $longitude,
      business_hours: $business_hours,
      city: $city,
      departament: $departament
    }){
      id
    }
  }
`

class PointCreateModal extends Component {
  render() {
    console.log(this.props)
    let i_name, i_address, i_category, i_contact, i_email, i_latitude, i_longitude, i_business_hours, i_city, i_departament
    return(
      <Mutation mutation={CREATE_POINT}>
        {
          createPoint => (
            <div className="Modal p-0-20">
              <div className="center-vertical w-100 scroll">
                <button onClick={this.props.handleCloseModal} className="Modal-close">
                </button>
                <h3 className="title-campaign-modal">Crear Punto</h3>
                <br/>
                <form
                  onSubmit={ e => {
                    e.preventDefault()
                    createPoint({
                      variables: {
                        name: i_name.value,
                        address: i_address.value,
                        category: i_category.value,
                        contact: i_contact.value,
                        email: i_email.value,
                        latitude: i_latitude.value,
                        longitude: i_longitude.value,
                        business_hours: i_business_hours.value,
                        city: i_city.value,
                        departament: i_departament.value
                      }
                    })
                    i_name.value=""
                    i_address.value=""
                    i_category.value=""
                    i_contact.value=""
                    i_email.value=""
                    i_latitude.value=""
                    i_longitude.value=""
                    i_business_hours.value=""
                    i_city.value=""
                    i_departament.value=""
                  }}
                  className="center"
                >
                  <input className="form-control-create"
                    type="text"
                    placeholder="Nombre"
                    ref={
                      name => {i_name = name}
                    }
                  />
                  <input className="form-control-create"
                    type="text"
                    placeholder="Dirección"
                    ref={
                      address => {i_address = address}
                    }
                  />
                  <select className="form-control-create"
                    ref={
                      category => {i_category = category}
                    }
                  >
                    <option value="Pilas">Pilas</option>
                    <option value="Medicamentos">Medicamentos</option>
                    <option value="Llantas">Llantas</option>
                    <option value="Plaguicidas">Plaguicidas</option>
                    <option value="Computadores">Computadores</option>
                    <option value="Bombillas">Bombillas</option>
                    <option value="Baterías de Plomo">Baterías de Plomo</option>
                  </select>
                  <input className="form-control-create"
                    type="text"
                    placeholder="E-mail"
                    ref={
                      email => {i_email = email}
                    }
                  />
                  <input className="form-control-create"
                    type="hidden"
                    value={this.props.center.lat}
                    ref={
                      latitude => {i_latitude = latitude}
                    }
                  />
                  <input className="form-control-create"
                    type="hidden"
                    value={this.props.center.lng}
                    ref={
                      longitude => {i_longitude = longitude}
                    }
                  />
                  <input className="form-control-create"
                    type="text"
                    placeholder="Contacto"
                    ref={
                      contact => {i_contact = contact}
                    }
                  />
                  <input className="form-control-create"
                    type="text"
                    placeholder="Horas de negocio"
                    ref={
                      business_hours => {i_business_hours = business_hours}
                    }
                  />
                  <input className="form-control-create"
                    type="text"
                    placeholder="Departamento"
                    ref={
                      departament => {i_departament = departament}
                    }
                  />
                  <input className="form-control-create"
                    type="text"
                    placeholder="Ciudad"
                    ref={
                      city => {i_city = city}
                    }
                  /><br/><br/>
                  <button className="near-me-button"
                    type="submit"
                  >Crear
                  </button>
                </form>
              </div>
            </div>
          )
        }
      </Mutation>
    )
  }
}

export default PointCreateModal
