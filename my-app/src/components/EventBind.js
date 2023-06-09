import React, { Component } from 'react'

class EventBind extends Component {
    constructor(){
        super()
        this.state = {
            message: 'hello'
        }
        this.changeMessage = this.changeMessage.bind(this)
    }
    changeMessage(){
        this.setState ({
            message: 'goodbye'
        })
    }
  render() {
    return (
      <div>{this.state.message}
      <br/>
        <button onClick={this.changeMessage}>Click</button>
      </div>
    )
  }
}

export default EventBind
