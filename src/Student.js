import React, { Component } from 'react'

export default class Student extends Component {

constructor(props) {
  super(props)
  this.studentId = React.createRef();
  this.studentName = React.createRef();
  this.studentMarks = React.createRef();
};


handleSubmit(e){

    let detials=`Student Details :
          Id    :${this.studentId.current.value}
          Name  :${this.studentName.current.value}
          Marks :${this.studentMarks.current.value}
            
         `;
      alert(detials);

    e.preventDefault();
}

    render() {
        return (
            <div className="text-primary">
                <h2>Student Uncontrolled Component</h2>
                <form      onSubmit={()=>this.handleSubmit()}>
                     <div>
                         <label>
                             Student Id :
                         <input   ref={this.studentId}/>
                         </label>
                     </div>
                     <div>
                         <label>
                             Student Name :
                         <input ref={this.studentName}/>
                         </label>
                     </div>
                     <div>
                         <label>
                             Student Marks :
                         <input  ref={this.studentMarks}/>
                         </label>
                     </div>

                     <div>   <button className="btn btn-primary"  type="submit">Submit</button></div>
                 </form>
            </div>
        )
    }
}
