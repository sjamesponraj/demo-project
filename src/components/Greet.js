import React, { Component } from 'react'
import { ColorConsumer } from '../context/colorContext';

class Greet extends Component {


    constructor(props) {
      
      super(props)
         console.log("=====Greet Component Created=======");
      };
    
componentDidMount(){
    console.log("=====Greet Component  DidMount=======");  
}


componentWillUnmount(){
    console.log("=====Greet Component  willUnMount=======");  
}


componentDidUpdate(){
    console.log("=====Greet Component  didUpdate=======");    
}


    render() {
        return (
            <div className="jumbotron">

                <h3>Greet Class Component</h3>
                <font color="green" size="5"> Hi {this.props.name} !!!!</font>
                     {this.props.children}
            </div>
        )
    }
}


export default Greet;