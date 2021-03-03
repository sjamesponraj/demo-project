import React from 'react'

export default function Hello(props) {

    console.log(props);

    return (
        <div className="jumbotron">
                
                        <h3>Hello  Functional Component</h3>
                        <font color="brown" size="4"> Hello {props.name} Are you from {props.city} ?</font>
                        <br/>
                        {props.children} 

        </div>
    )
}
