import React, {  PureComponent } from 'react'

export default class Counter extends PureComponent {

    state={
        count:0
      }


      constructor(props) {
      
        super(props)
           console.log("=====Counter Component Created=======");
         
          //Syntax 1 -Evant handling 
         //this.incrementHandler=this.incrementHandler.bind(this);

        };
      
  componentDidMount(){
    //  this.state.count=400;
      console.log("=====Counter Component  DidMount=======");  
  }
  
  
  componentWillUnmount(){
      console.log("=====Counter Component  willUnMount=======");  
  }
  
  
  componentDidUpdate(){
      console.log("=====Counter Component  didUpdate=======");    
  }
  

  incrementHandler=()=>{

    //this.state.count= this.state.count+1
    
    this.setState((prevState)=>{return {count:prevState.count+1}})
   
   //this.setState({count:200});
   //  this.setState({count:this.state.count+1},()=>{
   //     console.log("incrementHandler  "+this.state.count);
     //}); //always executes asynchronously
    
   }


  handleSomething(){
    this.incrementHandler();
    this.incrementHandler();
    this.incrementHandler();
    
    console.log("handleSomething  :"+this.state.count);
  }


    render() {

        console.log("=====Counter Component  rendere=======");   
        return (
            <div>
                <h2> Counter Demo</h2>
                 <hr/>
                 Counter is :{this.state.count} 
                     <br/><br/>

                 {/* Event Handling syntax 2 */}    
                 <button  class="btn-info" onClick={()=>this.incrementHandler()}>Increase Counter</button>

                 {/* Event Handling syntax 3 */}    
                 <button  class="btn-primary"  onClick={this.incrementHandler}>Increase Counter</button>
<hr/><hr/>
                <h2  onMouseOver={()=>this.handleSomething()}>Over the mous to Increment the count</h2>



            </div>
        )
    }
}
