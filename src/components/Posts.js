import axios from 'axios';
import React, { PureComponent } from 'react'

export default class Posts extends PureComponent {
    

    

    constructor(props) {
      
        super(props)
           console.log("=====Posts Component Created=======");
           
          

           this.state={
               title:'All Posts',
               userId:0,
               posts:[]
           }

        };
      
  componentDidMount(){
      
    const query = new URLSearchParams(this.props.location.search);
    console.log("query string :"+this.props.location.search);
    let userId=query.get("userId");
    
    if(userId)
   {
    console.log("Getting the posts for User Id ",userId);
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${query.get('userId')}`)
    .then(response => {
      console.log(response);
        this.setState({
            posts:response.data
        })
       
    });

   }

    else
    {
        console.log("Getting the posts for all users");
  
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      
        console.log(response);
        this.setState({
            posts:response.data
        })
       
    });
    }
      console.log("=====Posts Component  DidMount=======");  
  }
  
  
  componentWillUnmount(){
      console.log("=====Posts Component  willUnMount=======");  
  }
  
  
  componentDidUpdate(){
      console.log("=====Posts Component  didUpdate=======");    
  }
  














    render() {
        return (
            <div>
                <h2>{this.state.title}</h2>
                <table class="table table-hover">
                         <thead>
                           <tr>
                           <th>User Id</th>
                           <th>Post Id</th>
                           <th>Title</th>
                           <th>Body</th>
                           <th>View Comments</th>
                           
                               
                               
                        </tr>    

                         </thead>
                         <tbody>
                          
                          {
                                    this.state.posts.map(p=>{

        return <tr  key={p.id}>  
                <td>{p.userId}</td>
                <td>{p.id}</td>
                <td>{p.title}</td>
                <td>{p.body}</td>
                <td><input type="button" value="View Comments" class="btn btn-primary"/></td>
                </tr>

            })


              }


                         </tbody>
                     </table>
      

                
            </div>
        )
    }
}
