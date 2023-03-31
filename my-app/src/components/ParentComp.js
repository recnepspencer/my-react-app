import React, { Component, PureComponent} from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComponent'
import RegComp from './RegComp'

class ParentComp extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Spencer"
      }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: "Spencer"
            })
        }, 2000)
    }
  render() {
    console.log('rendered parent')
    return (
      <div>Parent Component
        <MemoComp name={this.state.name}></MemoComp>
        {/* <RegComp name={this.state.name}></RegComp>
        <PureComp name={this.state.name}></PureComp> */}
      </div>
    )
  }
}

export default ParentComp
