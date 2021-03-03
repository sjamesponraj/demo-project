import React, { Component } from 'react'
import State from './State';

export default class Country extends Component {


    constructor(props) {
      super(props)
    
      this.state = {
         name:'India',
         stateName:''
      };
    };
    
    inputChangeHandler=(event)=>{
        this.setState({
        [event.target.name]:event.target.value
       });

    }
    
    getStateName=(value)=>{
        console.log("Got value from state :"+value);
        this.setState({
            stateName:value
        })
    }

    render() {
        return (
            <div className="jumbotron" style={{'background-color':'cyan'}}>
                 <h2>Country Component</h2>
                 <h3>  
                 Country Name  :<input name="name"   onChange={this.inputChangeHandler}   value={this.state.name}/>
                 <br/><br/>
                 State Name    :  {this.state.stateName}     
                 </h3>      

                 <State    stateChanged={this.getStateName}      countryName={this.state.name}/>    
            </div>
        )
    }
}
