import React, { Component } from 'react'

export default class State extends Component {




   render() {

        let {stateChanged}=this.props;
      

        console.log(this.props);
        return (
            <div className="jumbotron" style={{'background-color':'yellow'}}>
                 <h2>State Component</h2>
                 <h3>  
             State Name :<input defaultValue="Maharashtra" ref={input=>this.message=input}   onChange={()=>stateChanged(this.message.value)}/>

              <br/><br/>
                 Country Name    :  {this.props.countryName}     
                 </h3>          
            </div>
        )
    }
}
