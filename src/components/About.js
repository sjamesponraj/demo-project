import React, { Component } from 'react'


export default class About extends Component {
   
   
    constructor(props) {
      
        super(props)
           console.log("=====About Component Created=======");
        };
      
  componentDidMount(){
      console.log("=====About Component  DidMount=======");  
  }
  
  
  componentWillUnmount(){
      console.log("=====About Component  willUnMount=======");  
  }
  
  
  componentDidUpdate(){
      console.log("=====About Component  didUpdate=======");    
  }
  
   
   
   
   
   
   
    render() {
        console.log("=====About Component  render=======");
        return (
            <div>

             <h2>   About Component   </h2>
       
               
            </div>
        )
    }
}
