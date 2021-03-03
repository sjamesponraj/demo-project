import React, { Component } from 'react'
import UpdatedComponent from './UpdatedComponent';

class HoverCounter extends Component {

    //  constructor(props) {
    //    super(props)
    
    //    this.state = {
    //       count:0
    //    };
    //  };
    
    //  incrementCount=()=>{
    //      this.setState(prevState=>{
    //            return {count:prevState.count+1}
    //      })
    //  }

     render() {

       let {name,count,incrementCount}=this.props;

         return (
             <div>
                 <font size="5" color="brown" onMouseOver={incrementCount}> {name} Overed {count} times</font>
             </div>
         )
     }
}

export let e=UpdatedComponent(HoverCounter)