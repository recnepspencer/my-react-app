import React, { Component } from "react";

export class Welcome extends Component{
    render(){
        const {name, heroName} = this.props
        return ( 
        <div>
            <h1>Welcomed {name} aka {heroName}
            </h1>
            {this.props.children}
        </div>
        )
    }
}
