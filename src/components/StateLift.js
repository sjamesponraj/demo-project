import React, { Component } from 'react'
import Country from './Country'
import Parent from './Parent'

export default class StateLift extends Component {
    render() {
        return (
            <div>
            <div>
                <h2> React State Lifting Demo</h2>
                <Parent/>
            </div>
            <hr/>
                <div class="jumbotron">
                     <Country/>
                </div>
            </div>


        )
    }
}
