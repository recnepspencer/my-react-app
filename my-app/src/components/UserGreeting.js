import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props){
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }
  render() {
    return (
        this.state.isLoggedIn ? <div>Welcome Spencer</div> : <div>Welcome Guest</div>
    )
    // let message;
    // if (this.state.isLoggedIn) {
    //     message = <div>Welcome Spencer</div>
    // } else {
    //     message = <div>Welcome Guest</div>
    // }

    // return (
    // <div>
    //     <div>
    //     {message}
    //     </div>
    // </div>
    // )
    // if (this.state.isLoggedIn){
    //     return (
    //         <div> Welcome, Spencer</div>
    //     )
    // } else {
    //     return (
    //         <div>
    //             Welcome, guest
    //         </div>
    //     )
    // }
    return (
      <div>
        <div>
            Welcome, Spencer
        </div>
        <div>Welcome, Guest</div>
      </div>
    )
  }
}

export default UserGreeting
