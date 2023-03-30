import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Spencer'
      }
      console.log('LifecycleB constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifecycleB did mount')
    }
    shouldComponentUpdate(){
        console.log('LifecycleB shouldComponentUpdate')
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifecycleB getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('LifecycleB componentDidUpdate')
    }
  render() {
    console.log('LifecycleB render')
    return (
      <div>
        LifecycleB
      </div>
    )
    }
}
export default LifecycleB
