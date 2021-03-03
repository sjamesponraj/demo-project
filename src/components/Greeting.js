import React, { Component } from 'react'

export default class Greeting extends Component {
   


componentWillMount(){
    console.log("============Greeting component willMount==========");
}


componentWillUpdate(){
    console.log("============Greeting component will Update==========");
  
}

   
    render() {
    console.log(this.props.name);
      let {name}=this.props;
      
      if(name=="" || name==undefined ||name==null)
          throw Error("You are not valid person");

            return (
            <div>
                    <h3> Hello {this.props.name}</h3>        
            </div>
        )
    }
}
