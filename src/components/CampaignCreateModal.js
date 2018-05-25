import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import '../styles.css'

const CREATE_CAMPAIGN = gql`
  mutation createCampaign(
    $name: String!,
    $city: String!,
    $address: String!,
    $ubication: [Int]!,
    $created_date: String,
    $start_date: String!,
    $end_date: String!,
    $status: String!,
    $program: String!
  ){
    createCampaign(campaign:{
      name: $name
      city: $city
      address: $address
      ubication: $ubication
      created_date: $created_date
      start_date: $start_date
      end_date: $end_date
      status: $status
      program: $program
    }){
      _id
    }
  }
`

class CampaignCreateModal extends Component {
  render() {
    let i_name, i_city, i_address, i_ubication, i_create_date, i_start_date, i_end_date, i_status, i_program
    return(
      <Mutation mutation={CREATE_CAMPAIGN}>
        {
          createCampaign => (
            <div className="Modal p-0-20">
              <div className="center-vertical scroll">
                <button onClick={this.props.handleCloseModal} className="Modal-close">
                </button>
                <h3  className="title-campaign-modal">Crear Campaña</h3><br/>
                <form
                  onSubmit={ e => {
                    e.preventDefault()
                    createCampaign({
                      variables: {
                        name: i_name.value,
                        city: i_city.value,
                        address: i_address.value,
                        ubication: i_ubication,
                        created_date: i_create_date.value,
                        start_date: i_start_date.value,
                        end_date: i_end_date.value,
                        status: i_status.value,
                        program: i_program.value
                      }
                    })
                    i_name.value=""
                    i_city.value=""
                    i_address.value=""
                    i_ubication.value=""
                    i_create_date.value=""
                    i_start_date.value=""
                    i_end_date.value=""
                    i_status.value=""
                    i_program.value=""
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
                    placeholder="Ciudad"
                    ref={
                      city => {i_city = city}
                    }
                  />
                  <input className="form-control-create"
                    type="text"
                    placeholder="Dirección"
                    ref={
                      address => {i_address = address}
                    }
                  />
                  <input className="form-control-create"
                    type="hidden"
                    value={[10, 10]}
                    ref={
                      ubication => {i_ubication = ubication}
                    }
                  /><br/>
                  <label class="">Fecha de creación: </label>
                  <input className="form-control-create"
                    type="date"
                    ref={
                      created_date => {i_create_date = created_date}
                    }
                  />

                  <label class="">Fecha de inicio: </label>
                  <input  className="form-control-create"
                    type="date"
                    placeholder="Fecha de inicio"
                    ref={
                      start_date => {i_start_date = start_date}
                    }
                  />
                  <label class="">Fecha de finalización</label>
                  <input  className="form-control-create"
                    type="date"
                    ref={
                      end_date => {i_end_date = end_date}
                    }
                  />
                  <input  className="form-control-create"
                    type="hidden"
                    value="Activo"
                    ref={
                      status => {i_status = status}
                    }
                  />
                  <input  className="form-control-create"
                    type="text"
                    placeholder="Programa"
                    ref={
                      program => {i_program = program}
                    }
                  />
                  <br/>
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

export default CampaignCreateModal
