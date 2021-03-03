import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class UserTable extends Component {



    constructor(props) {
      
        super(props)
           console.log("=====UserTable Component Created=======");
           
           this.state={
               title:'Users Table',
               users:[]
           }

        };
      
  componentDidMount(){
      
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        console.log("USer Table===========");
        console.log(response);
        this.setState({
            users:response.data
        })
       
    });

      console.log("=====UserTable Component  DidMount=======");  
  }
  
  
  componentWillUnmount(){
      console.log("=====UserTable Component  willUnMount=======");  
  }
  
  
  componentDidUpdate(){
      console.log("=====UserTable Component  didUpdate=======");    
  }
  














    render() {
        return (
            <div>
                <h2>{this.state.title}</h2>
                <table class="table table-hover">
                         <thead>
                           <tr>
                           <th>User Id</th>
                           <th>Name</th>
                           <th>Email</th>
                           <th>City</th>
                           <th>Company</th>
                           <th>View Posts</th>
                           <th>View Todos</th>
                           <th>View Albums</th>
                           
                               
                               
                        </tr>    

                         </thead>
                         <tbody>
                          
                          {
                                    this.state.users.map(u=>{

        return <tr  key={u.id}>  
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.address.city}</td>
                <td>{u.company.name}</td>
                <td><Link  to={`/posts?userId=${u.id}`}  ><input type="button" value="View Posts" class="btn btn-primary"/></Link> </td>
                <td><Link  to={`/todos?userId=${u.id}`}><input type="button" value="View Todos" class="btn btn-info"/></Link> </td>
                <td><Link  to={`/albums?userId=${u.id}`} ><input type="button" value="View Albums" class="btn btn-success"/></Link> </td>
                </tr>

            })


              }


                         </tbody>
                     </table>
      

                
            </div>
        )
    }
}
