import App from '../components/App'
import Header from '../components/Header'
import About from '../components/About'

export default (props) => (
  <App>
    <Header pathname={props.url.pathname} />
    <About />
  </App>
)
