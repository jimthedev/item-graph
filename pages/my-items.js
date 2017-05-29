import App from '../components/App'
import Header from '../components/Header'
import Dock from '../components/Dock'
import Markdown from 'react-remarkable';

export default (props) => (
  <App>
    <style jsx>{`
      .markdown-wrapper {
        padding: 3rem 3rem 1.5rem 2rem;
        margin-bottom: 30vh;
      }
    `}</style>
    <Header pathname={props.url.pathname} />
    <Dock>
      <div className="markdown-wrapper">
        <Markdown className="markdown">{`
# Testing
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        `}</Markdown>
      </div>
    </Dock>
  </App>
)
