import React, { Component } from 'react'
import '../App.css';

class Notes extends Component {
    render(){
        return (
            <div>
                <h1>These are my notes.</h1>
                <p>
                    <ul>
                        <li>
                            Why export as default vs export class?
                        </li>
                        <li>
                            Thing to know: When to use functional componenet vs class component.
                        </li>
                        <li>
                            Can you do routing in react? 
                        </li>
                        <li>
                            when you need to run code with callback funtion, put it in the setState function rather than after
                        </li>
                        <li>
                            13 4:27 I need to understand better how the calling of the function works with regards to not putting parentheses.
                        </li>
                    </ul>
                </p>
            </div>
        )
    }
}
export default Notes
