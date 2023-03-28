import React, { Component } from "react";

export class Welcome extends Component{
    render(){
        return (
        <div>
            <h1>Welcomed {this.props.name} aka {this.props.heroName}
            </h1>
            {this.props.children}
        </div>
        )
    }
}
