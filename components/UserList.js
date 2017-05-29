import { gql, graphql } from 'react-apollo'
import PostUpvoter from './PostUpvoter'

const USERS_PER_PAGE = 3

function UserList ({ data: { allUsers, loading, _allUsersMeta }, loadMoreUsers }) {
  if (allUsers && allUsers.length) {
    const areMoreUsers = allUsers.length < _allUsersMeta.count
    return (
      <section>
        <ul>
          {allUsers.map((user, index) =>
            <li key={user.id}>
              <div>
                <span>{index + 1}. </span>
                <a href="">{user.email}</a>
                <PostUpvoter id={user.id} votes={0} />
              </div>
            </li>
          )}
        </ul>
        {areMoreUsers ? <button onClick={() => loadMoreUsers()}> {loading ? 'Loading...' : 'Show More'} </button> : ''}
        <style jsx>{`
          section {
            padding-bottom: 20px;
          }
          li {
            display: block;
            margin-bottom: 10px;
          }
          div {
            align-items: center;
            display: flex;
          }
          a {
            font-size: 14px;
            margin-right: 10px;
            text-decoration: none;
            padding-bottom: 0;
            border: 0;
          }
          span {
            font-size: 14px;
            margin-right: 5px;
          }
          ul {
            margin: 0;
            padding: 0;
          }
          button:before {
            align-self: center;
            border-style: solid;
            border-width: 6px 4px 0 4px;
            border-color: #ffffff transparent transparent transparent;
            content: "";
            height: 0;
            margin-right: 5px;
            width: 0;
          }
        `}</style>
      </section>
    )
  }
  return <div>Loading</div>
}

const allUsers = gql`
  query allUsers($first: Int!, $skip: Int!) {
    allUsers(orderBy: createdAt_DESC, first: $first, skip: $skip) {
      id
      email
    },
    _allUsersMeta {
      count
    }
  }
`

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (UserList)
export default graphql(allUsers, {
  options: {
    variables: {
      skip: 0,
      first: USERS_PER_PAGE
    }
  },
  props: ({ data }) => {
    return ({
      data,
      loadMoreUsers: () => {
        return data.fetchMore({
          variables: {
            skip: data.allUsers.length
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            if (!fetchMoreResult) {
              return previousResult
            }
            return Object.assign({}, previousResult, {
              // Append the new results to the old one
              allUsers: [...previousResult.allUsers, ...fetchMoreResult.allUsers]
            })
          }
        })
      }
    })
  }
})(UserList)
