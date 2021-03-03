import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class UserList extends Component {


    constructor(props) {
      
        super(props)
           console.log("=====UserList Component Created=======");
           
           this.state={
               title:'Users List',
               users:[]
           }

        };
      
  componentDidMount(){
      
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        console.log(json);
        this.setState({
            users:json
        })
    });

      console.log("=====UserList Component  DidMount=======");  
  }
  
  
  componentWillUnmount(){
      console.log("=====UserList Component  willUnMount=======");  
  }
  
  
  componentDidUpdate(){
      console.log("=====UserList Component  didUpdate=======");    
  }
  



    render() {
        return (
            <div>
               <h2>{this.state.title}</h2>  

               <div class="list-group">
                {
                    this.state.users.map(user=>{
                        return <a  key={user.id} class="list-group-item"><Link   to={`/user/${user.id}`}>{user.name}</Link></a>
                    })
                }   
               
  
                 </div>


            </div>
        )
    }
}
