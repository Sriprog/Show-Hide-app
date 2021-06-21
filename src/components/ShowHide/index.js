import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isFirst: false, isLast: false}

  ClickFirst = () => {
    this.setState(prevState => ({isFirst: !prevState.isFirst}))
  }

  ClickSecond = () => {
    this.setState(prevState => ({isLast: !prevState.isLast}))
  }

  render() {
    const {isFirst, isLast} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-container">
          <div className="name-container">
            <button
              className="show-hide-button"
              type="button"
              onClick={this.ClickFirst}
            >
              Show/Hide Firstname
            </button>
            {isFirst && <p className="name">Joe</p>}
          </div>
          <div className="name-container">
            <button
              className="show-hide-button"
              type="button"
              onClick={this.ClickSecond}
            >
              Show/Hide Lastname
            </button>
            {isLast ? <p className="name">Jonas</p> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
