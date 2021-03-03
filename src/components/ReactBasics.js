import React, { Component } from 'react'
import ErrorBoundary from './ErrorBoundry';
import Greet from './Greet'
import Greeting from './Greeting';
import Hello from './Hello'

export default class ReactBasics extends Component {
   
   

   
   
    render() {


        let personName="pradeep";
        let city="Solapur";
        let colors=["RED","GREEN","BLUE"];
      
      
        return (
            <div>

            <div>    
                
            <h2> React Basics</h2>

              <h2> React Components</h2>
              <ul>
             <li>Components describe a part of user i/f</li> 
             <li>They are reusable and can be nested inside other components</li> 
             <li> Components are crucial part of any react application</li>
     
             </ul>

             <h2> Types of Components</h2>
              <ol>
              <li>functional components</li>
              <li>Class components</li>
              </ol>

               <div>

            <h2>Functional components  :</h2>
             Its a JS function that accepts input as a properties(props) optionally

             <Hello   name="Sachin"  city="Mumbai">
         <h2>Welcome</h2>
       </Hello>  

       <Hello   name="Pradeep" city="Pune">
             <button>Click Me</button>
         </Hello>
       <Hello   name="James"  city="US"/>
       <Hello   name={personName} city={city}  {...colors} />
       <hr/>
 


             </div>
       
             <div>
             <h2>Class components  :</h2>
    
            1.Class components are basically ES6 clasess
            2.Class should extend Component class and should render method implemented
            3.Similar to Function components It optionally receives the input 
              properties props and return html
            4.Maintain a private internal state (maintains the information of that component only)
            </div>


             </div>




      

       <Greet  name="Rajesh"/>
       <Greet  name="Mohan">

        <button> Help Me</button>
       </Greet> 
   
      <ErrorBoundary>
       <Greeting name="Ram"/>
       </ErrorBoundary>
      
       <ErrorBoundary>
       <Greeting name="Rahim"/>
       </ErrorBoundary>
      
       <ErrorBoundary>
       <Greeting name="Rajesh"/>
       </ErrorBoundary>
  


    </div>
        )
    }
}
