import React, { Component } from 'react'
import Course from '../Course'
import Student from '../Student'

export default class ReactForm extends Component {
    render() {
        return (
            <div>
                <h2>React Forms</h2>
                <Student/>
                   <hr/>
               
               <Course/>
               
            </div>
        )
    }
}
