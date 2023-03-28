import React, { Component } from "react";

export class Welcome extends Component{
    render(){
        return <h1>Class Component
            <br/>
            <button id='logged-in' onClick={true}>Hello</button>
        </h1>
    }
}
