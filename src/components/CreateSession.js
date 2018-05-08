import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import '../styles.css'

const CREATE_SESSION = gql`
  mutation createSession(
    $email: String!,
    $password: String!
  ){
    createSession(
      auth:{
        auth:{
          email: $email,
          password: $password
        }
      }
    ){
      jwt
    }
  }
`

class CreateSession extends Component {
  render() {
    let email_i, password_i
    return(
      <Mutation mutation={CREATE_SESSION}>
        {(createSession, { loading, error, data }) => (
          <div>
            <form
              onSubmit={e => {
                e.preventDefault()
                createSession({
                  variables: {
                    email: email_i.value,
                    password: password_i.value
                  }
                })
                email_i.value=""
                password_i.value=""
              }}
            >
              <input
                className="form-control"
                placeholder={"E-mail"}
                ref={content => {email_i=content}}
              />
              
              <input
                className="form-control"
                placeholder={"Contraseña"}
                ref={content => {password_i=content}}
              />
              <br/>

              <button
                className="btn btn-default"
                type="submit"
              >
                Ingresar
              </button>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p>Contraseña o Email inválidos</p>}
            {console.log("LOGIN", data)}
            {data && this.props.handleLogin(data.createSession.jwt)}
          </div>
        )}
      </Mutation>
    )
  }
}

export default CreateSession
