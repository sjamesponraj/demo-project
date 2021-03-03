import React, { Component } from 'react'
import { e as HoverCounter } from './HoverCounter'
import { e as ClickCounter } from './ClickCounter'


export default class Hoc extends Component {
    render() {
        return (
            <div>
                <h2>High Order Component Demo</h2>
               
               <div class="jumbotron">
                   <ClickCounter/>
               </div>
               <div class="jumbotron">
                   <HoverCounter/>
               </div>

            </div>
        )
    }
}
