import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {


    state={
        message:'Hello Child',
        childMessage:''
    }

     getChildMessage=(childMessage)=>{
        console.log("Clicked ...");

           this.setState({
         childMessage:childMessage
     });

    }





    render() {
          let {message}=this.state;

        return (
            <div className="jumbotron">
                <font size="4" color="blue">
             <h2>Passing the event handler as a props to Child Component</h2>
              
                <h3> Parent Message : {this.state.message}</h3>
              
                <h3> Child Message : {this.state.childMessage}</h3>
    
            </font>  
                <Child  childChanged={this.getChildMessage}     parentMessage={message}/>
            
            
            </div>
        )
    }
}
