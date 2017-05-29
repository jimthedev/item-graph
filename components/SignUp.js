import { gql, graphql } from 'react-apollo'

function SignUp ({ createUser }) {
  function handleSubmit (e) {
    e.preventDefault()

    let email = e.target.elements.email.value
    let password = e.target.elements.password.value

    if (email === '' || password === '') {
      window.alert('Both fields are required.')
      return false
    }

    // prepend http if missing from password
    if (!password.match(/^[a-zA-Z]+:\/\//)) {
      password = `http://${password}`
    }

    createUser(email, password).then((done) => {
      console.log(done)
    }).catch(e => console.error(e));

    // reset form
    e.target.elements.email.value = ''
    e.target.elements.password.value = ''
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input placeholder='email' name='email' />
      <input placeholder='password' name='password' />
      <button type='submit'>Sign Up</button>
      <style jsx>{`
        form {
          border-bottom: 1px solid #ececec;
          padding-bottom: 20px;
          margin-bottom: 20px;
        }
        h1 {
          font-size: 20px;
        }
        input {
          display: block;
          margin-bottom: 10px;
        }
      `}</style>
    </form>
  )
}

const createUser = gql`
  mutation createUser($email: String!, $password: String!) {
    createUser(authProvider: { email: { email: $email, password: $password } }) {
      id
      email
    }
  }
`

export default graphql(createUser, {
  props: ({ mutate }) => ({
    createUser: (email, password) => mutate({
      variables: { email, password },
      updateQueries: {
        allUsers: (previousResult, { mutationResult }) => {
          console.log(mutationResult)
          const newUser = mutationResult.data.createUser
          return Object.assign({}, previousResult, {
            // Append the new User
            allUsers: [newUser, ...previousResult.allUsers]
          })
        }
      }
    })
  })
})(SignUp)
