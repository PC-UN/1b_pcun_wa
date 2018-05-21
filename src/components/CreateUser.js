import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import '../styles.css'

const CREATE_USER = gql`
  mutation createUser(
    $username: String!,
    $email: String!,
    $password: String!
  ){
    createUser(user:{
      username: $username,
      email: $email,
      password: $password
    }){
      id
      username
      email
    }
  }
`

class CreateUser extends Component {
  render() {
    let username_i, email_i, password_i
    return(
      <Mutation mutation={CREATE_USER}>
        {(createUser, { loading, error, data }) => (
          <div>
            <form
              onSubmit={e => {
                e.preventDefault()
                createUser({
                  variables: {
                    username: username_i.value,
                    email: email_i.value,
                    password: password_i.value
                  }
                })
                username_i.value=""
                email_i.value=""
                password_i.value=""
              }}
              className="center"
            >
              <input
                className="form-control-signin"
                placeholder={"Username"}
                ref={content => {username_i=content}}
              />
              <input
                className="form-control-signin"
                placeholder={"E-mail"}
                ref={content => {email_i=content}}
              />
              <input
              type="password"
              className="form-control-signin"
                placeholder={"Contraseña"}
                ref={content => {password_i=content}}
              />
              <br/>
              <br/>

              <button
                className="btn-signin"
                type="submit"
              >Registarse</button>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p>Error D:</p>}
            {data && <p>
              Te has registrado satisfactoriamente.
            </p>}
          </div>
        )}
      </Mutation>
    )
  }
}

export default CreateUser
