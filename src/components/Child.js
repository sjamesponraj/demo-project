import React, { Component } from 'react'

export default class Child extends Component {
   
   
    state={
           message:'Child Message:'
        }
  
    
   
    render() {

   
        console.log("Child...");
        console.log(this.props);

        let {childChanged}=this.props;
        let {message}=this.state
        
        return (
            <div class="jumbotron">
                <font size="4" color="green">
                 <h2> Child Component</h2>

                Parent Message  :{this.props.parentMessage}


                 <h2>Child Message :{this.state.message}</h2>
                
                <input  ref={input=>this.message=input}   onChange={()=>childChanged(this.message.value)}/>

                
                <button onClick={()=>childChanged(message+" :"+Math.random()*10)}>Get Child Message</button>
                </font>
            </div>
        )
    }
}
