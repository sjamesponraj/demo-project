import React, { Component } from 'react'
import Hi from './Hi';


export default class Home extends Component {
    
    constructor(props) {
      
        super(props)
           console.log("=====Home Component Created=======");
        };
      
                   
         


  componentDidMount(){
    const query = new URLSearchParams(this.props.location.search);
    let userId=query.get("userId");

   
    
    console.log("=====Home Component  DidMount======="+userId);  
  }
  
  
  componentWillUnmount(){
      console.log("=====Home Component  willUnMount=======");  
  }
  
  
  componentDidUpdate(){
      console.log("=====Home Component  didUpdate=======");    
  }
  
   
    
    
    
    
    
    
    render() {

        console.log("=====Home Component  render=======");  
        return (
            <div>
                <h2> Home Component</h2>
                <Hi/>

            </div>
        )
    }
}
