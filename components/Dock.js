import ReactDock from 'react-dock'

export default class Dock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: false,
      size: 380
    }
  }
  render() {
    return (
      <div>
        <style jsx>{`
        .close-wrapper {
          position: absolute;
          background-color: #ccc;
          width: 100%;
          display: flex;
        }
        .close {
          display: inline-block;
          font-size: 40px;
          font-weight: bold;
          cursor: pointer;

          width: 100%;
          padding-top: 10px;
          padding-right: 70px;
          text-align: right;
          color: rgba(0,0,0,0.16);
          background-color: #fff;

        }
        .stories-dock-button {
          position: absolute;
          top: 25px;
          right: 50px;
          font-size: 13px;
          cursor: pointer;
        }

      `}</style>
        <div className="stories-dock-button" onClick={() => this.setState({ isVisible: !this.state.isVisible })}>Stories</div>
        <ReactDock position='right' dimMode="none" fluid={false} size={this.state.size} onSizeChange={(size)=>{if(size> 110) this.setState({size})}} isVisible={this.state.isVisible}>
          {/* you can pass a function as a child here */}
          <div className="close-wrapper">
            <div className="close" onClick={() => this.setState({ isVisible: !this.state.isVisible })}>
              x
            </div>
          </div>
          {this.props.children}
        </ReactDock>
      </div>
    )
  }
}
