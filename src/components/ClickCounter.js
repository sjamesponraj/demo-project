import React, { Component  } from 'react'
import UpdatedComponent from './UpdatedComponent';

class ClickCounter extends Component {

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
                 <button class="btn btn-info" onClick={incrementCount}> {name} Clicked {count} times</button>
             </div>
         )
     }
}

export let e=UpdatedComponent(ClickCounter)

