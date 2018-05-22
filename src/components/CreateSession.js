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
    auth(
      auth: {
        email: $email,
        password: $password
      }
    ){
      answer
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
              className="center"
            >
              <input
                placeholder={"E-mail"}
                ref={content => {email_i=content}}
                className="form-control-signin"
              />

              <input
                type="password"
                placeholder={"Contraseña"}
                ref={content => {password_i=content}}
                className="form-control-signin"
              />
              <br/>
              <br/>

              <button
                className="btn-signin"
                type="submit"
              >
                Ingresar
              </button>
            </form>
            {loading && <p>Loading...</p>}
            {error && this.props.handleTypeModal(99, error)}
            {console.log("LOGIN", data)}
            {data && this.props.handleLogin(data)}
          </div>
        )}
      </Mutation>
    )
  }
}

export default CreateSession
