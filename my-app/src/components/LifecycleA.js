import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Spencer'
      }
      console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifecycleA did mount')
    }
    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate')
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'BeepBopBooP'
        })
    }
  render() {
    console.log('LifecycleA render')
    return (
        <div>
            Lifecycle A
        
        <LifecycleB></LifecycleB>
        <button onClick={this.changeState}>Change state</button>
        </div>
    )
    }
}
export default LifecycleA
