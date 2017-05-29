import App from '../components/App'
import Header from '../components/Header'
import SignUp from '../components/SignUp'
import UserList from '../components/UserList'
import withData from '../lib/withData'

export default withData((props) => (
  <App>
    <Header pathname={props.url.pathname} />
    <SignUp />
    <UserList />
  </App>
))
