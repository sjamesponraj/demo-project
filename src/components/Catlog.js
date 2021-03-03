import React, { Component } from 'react'

export default class Catlog extends Component {

  

    constructor(props) {
      super(props)
    
      this.state = {
         technologies:[
            {id:101,title:'React',likes:0,dislikes:0},
            {id:102,title:'Angular',likes:0,dislikes:0},
            {id:103,title:'Micro Services',likes:0,dislikes:0},
            {id:104,title:'AWS',likes:0,dislikes:0},
            {id:105,title:'MAchine Learning',likes:0,dislikes:0},
      ]
      };
      console.log("=====Catlog Component Created=======");
    };
  
componentDidMount(){
  console.log("=====Catlog Component  DidMount=======");  
}


componentWillUnmount(){
  console.log("=====Catlog Component  willUnMount=======");  
}


componentDidUpdate(){
  console.log("=====Catlog Component  didUpdate=======");    
}


    render() {
        console.log("=====Catlog Component  render=======");  

        return (
            <div class="jumbotron">
                        <h2> Top 5 Technologies</h2>

                     <table class="table table-hover">
                         <thead>
                           <tr>
                           <th>Id</th>
                           <th>Technology</th>
                           <th>Likes</th>
                           <th>Dislikes</th>
                           <th>Like It</th>
                           <th>Dislike It</th>
                               
                               
                        </tr>    

                         </thead>
                         <tbody>
                          
                          {
                                    this.state.technologies.map(t=>{

        return <tr  key={t.id}>  
                <td>{t.id}</td>
                <td>{t.title}</td>
                <td>{t.likes}</td>
                <td>{t.dislikes}</td>
                <td><input type="button" value="Like It" class="btn btn-success"/></td>
                <td><input type="button" value="Dislike It" class="btn btn-danger"/></td>
                </tr>

            })


              }


                         </tbody>
                     </table>

                
            </div>
        )
    }
}
