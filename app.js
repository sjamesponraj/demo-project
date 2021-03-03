const express=require("express");
const cors=require("cors");


//create a server 
let app=express();


//enable the parsing of json data
app.use(express.json());
app.use(express.urlencoded({extended:true}))
//app.use(cors()); //resource sharing
app.use(express.static("build"));

var employees=[
    {id:1,name:"James",salary:220000,doj:new Date("July 17,2000")},
    {id:2,name:"Abhinesh",salary:320000,doj:new Date("July 17,1996")},
    {id:3,name:"Pradeep",salary:520000,doj:new Date("June 17,2016")},
    {id:4,name:"Sunil",salary:720000,doj:new Date("April 17,2015")},
    {id:5,name:"Anup",salary:820000,doj:new Date("July 17,2020")},
    {id:6,name:"Rajendra",salary:520000,doj:new Date("August 17,2011")},
   ];
   

   //get all employees
   app.get("/api/employees",function(request,response){
       response.json(employees);
   });


  //get employee by id
   app.get("/api/employees/:id",function(request,response){
           var emp_id=parseInt(request.params.id);

           var employee=employees.filter((e)=>e.id==emp_id)[0];
          response.json(employee);
   });
   

//delete employee by id
app.delete("/api/employees/:id",function(request,response){
    var emp_id=parseInt(request.params.id);

    employees=employees.filter((e)=>e.id!=emp_id);
   
    response.json(employees);
});


//update employee by id
app.put("/api/employees/:id",function(request,response){
    var emp_id=parseInt(request.params.id);
    var employee=request.body; //{id:1,name:"James",balance:220000,doj:new Date("July 17,2000")}

    employees.map((e,i)=>{
        if(e.id==emp_id)
        employees[i]=employee;
     });
   
    response.json(employees);
});

//add employee by id
app.post("/api/employees",function(request,response){
  
    var employee=request.body; //{id:1,name:"James",balance:220000,doj:new Date("July 17,2000")}

    employees.push(employee); 
    
    response.json(employees);
});

//start application port 3000
app.listen(3000,function(){
    console.log("Employee Servver started on port 3000");
});

