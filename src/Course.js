import React, { Component } from 'react'

export default class Course extends Component {


    constructor(props) {
      super(props)
    
      this.state = {
       courseId:101,
       courseName:'React',
       coursePrice:1200 
        
      };
    };
    


    handleInputChange=(e)=>{
        this.setState({
           [e.target.name]:e.target.value
        })
    }



    handleCourseIdChange=(e)=>{
        this.setState({
            courseId:e.target.value
        })
    }

    handleCourseNameChange=(e)=>{
        this.setState({
            courseName:e.target.value
        })
    }

    handleCoursePriceChange=(e)=>{
        this.setState({
            coursePrice:e.target.value
        })
    }


      
    handleSubmit=(event) =>{
        alert('Your Course Details: ' + this.state.courseId+
        "  "+this.state.courseName+"  "+this.state.coursePrice);
       
    }

    render() {
        return (
            <div className="text-info">
            <h2>Course Controlled Form </h2>

<form  onSubmit={this.handleSubmit}>


<div className="form-group">
<label>Course Id</label>     
<input value={this.state.courseId}  name="courseId"   onChange={this.handleInputChange} />
</div>

<div className="form-group">
<label>Course Name</label>     
<input  value={this.state.courseName}  name="courseName" onChange={this.handleInputChange}/>
</div>

<div className="form-group">
<label>Course Price </label>     
<input value={this.state.coursePrice} name="coursePrice" onChange={this.handleInputChange}/>
</div>
<button type="submit" className="btn btn-primary">Submit</button>
</form>
<pre>
Course Id :{this.state.courseId}  
Name      :{this.state.courseName}  
Price     :{this.state.coursePrice}  
    
</pre>


</div>
        )
    }
}
