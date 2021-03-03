import axios from 'axios';
import React, { Component } from 'react'

export default class User extends Component {



    constructor(props) {
      super(props)
         this.state = {
         userId:this.props.match.params.userId,    
         user:{
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
              "street": "Kulas Light",
              "suite": "Apt. 556",
              "city": "Gwenborough",
              "zipcode": "92998-3874",
              "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
              }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
              "name": "Romaguera-Crona",
              "catchPhrase": "Multi-layered client-server neural-net",
              "bs": "harness real-time e-markets"
            }
          }
      };

      console.log("......USer component created......");

    };
    



    componentDidMount(){
        console.log("......User didMount......");

      
        axios.get(`https://jsonplaceholder.typicode.com/users/${this.state.userId}`)
             .then(response=>{
               this.setState({
                   user:response.data
               });

      })

    }


    componentDidUpdate()
     {
        

      console.log("......USer didUpdate......");
    }



    componentWillUnmount(){

        console.log("......USer willUnmount......");
    }




    render() {

       
        console.log(this.props);
        console.log("===============");
        console.log(this.props.match.params);
        

      if(this.state.user!=null)
        return (
            <div>
                <h2> {this.state.user.username} Details</h2>
                
                <table class="table table-hover">
                         <tbody>
                           <tr>
                           <th>User Id</th>
                           <td>{this.state.user.id}</td>
                           </tr>
                           <tr>
                           <th>Name</th>
                           <td>{this.state.user.name}</td>
                           </tr>
                           <tr><th>Email</th>
                           <td>{this.state.user.email}</td>
                           </tr>
                           <tr><th>City</th>
                           <td>{this.state.user.address.city}</td>
                           </tr>
                           <tr><th>Company</th>
                           <td>{this.state.user.company.name}</td>
                           </tr>
                                   
                                             
                         </tbody>

                
                </table>
            
            
              
            </div>
        )
else
return ( <h2>Hello Guest!!!</h2>)

    }
}
