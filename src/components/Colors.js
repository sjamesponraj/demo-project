import React from 'react'
import { UserConsumer } from '../context/userContext';

export default function Colors() {


    let colors=["RED","GREEN","BLUE","MAGENTA"];

    return (
        <div class="jumbotron">

        
            <h2> 
                <UserConsumer>
                    {user=>user}
                </UserConsumer>
                Favourate Colors</h2>
           
           <ul>
              {
                colors.map(c=><li key={c}  >{c}</li>)  
              }
           </ul>
          


        </div>
    )
}
