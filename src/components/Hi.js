import React, {useState,useEffect} from 'react'

function Hi() {

 // Declare a new state variable, which we'll call "count"
 const [count, setCount] = useState(10);

 
 // Similar to componentDidMount and componentDidUpdate:
 useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });



    return (
        <div>
            <h2> React Hooks Demo</h2>
            <p>You clicked {count} times</p>
         <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
        </div>
    )
}

export default Hi
