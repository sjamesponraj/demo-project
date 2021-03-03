import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Link} from "react-router-dom"
import Home from './components/Home';
import About from './components/About';
import ReactBasics from './components/ReactBasics';
import Colors from './components/Colors';
import Catlog from './components/Catlog';
import Counter from './components/Counter';
import ReactForm from './components/ReactForm';
import UserList from './components/UserList';
import UserTable from './components/UserTable';
import Posts from './components/Posts';
import User from './components/User';
import Photos from './components/Photos';
import Comments from './components/Comments';
import Todos from './components/Todos';
import Albums from './components/Albums';
import StateLift from './components/StateLift';
import Hoc from './components/Hoc';
import EmployeeTable from './components/EmployeeTable';
import NewEmployee from './components/NewEmployee';
import DeleteEmployee from './components/DeleteEmployee';
import EditEmployee from './components/EditEmployee';




function App() {

  return (
    <Router>
  
  
  <div className="App">
    
  
  <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">React at Mphasis</a>
    </div>
    <ul class="nav navbar-nav">
           
    <li class="active"><Link  to="/">Home</Link></li>
    <li class="active"><Link to="/basics">React Basic</Link></li>
    <li class="active"><Link to="/colors">Colors</Link></li>
    <li class="active"><Link to="/catlog">Catlog</Link></li>
    <li class="active"><Link to="/counter">Counter</Link></li>
    <li ><Link to="/forms">React Forms</Link></li>
    <li ><Link to="/lift">React State Lifting</Link></li>
    <li><Link to="/hoc">HOC</Link></li>
    <li ><Link to="/lift">React State Lifting</Link></li>
    <li ><Link to="/employee-table">Employee CRUD App</Link></li>

        
      
    
    
    
    <li class="active"><Link to="/about">About</Link></li>

      
      
      
      
      <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Case Study <span class="caret"></span></a>
        <ul class="dropdown-menu">
        <li ><Link to="/user-list">User List</Link></li>
        <li ><Link to="/user-table">User Table</Link></li>
        <li ><Link to="/posts">Posts</Link></li>
        <li ><Link to="/comments">Comments</Link></li>
        <li ><Link to="/todos">Todos</Link></li>
        <li ><Link to="/albums">Albums</Link></li>
        <li ><Link to="/photos">Photos</Link></li>
         
         
        </ul>
      </li>
      <li><a href="#">Page 2</a></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
      <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
    </ul>
  </div>
</nav>
  
  
  
<div class="container"  align="left">
<Route   exact  path="/"   component={Home}/>
  <Route    path="/basics"   component={ReactBasics}/>
  <Route    path="/home"   component={Home}/>
  <Route    path="/about"   component={About}/>
  <Route    path="/colors"   component={Colors}/>
  <Route    path="/catlog"   component={Catlog}/>
  <Route    path="/counter"   component={Counter}/>
  <Route    path="/forms"   component={ReactForm}/>
  <Route    path="/user-list"   component={UserList}/>
  <Route    path="/user-table"   component={UserTable}/>
  <Route    path="/posts"   component={Posts}/>
  <Route    path="/comments"   component={Comments}/>
  <Route    path="/todos"   component={Todos}/>
  <Route    path="/albums"   component={Albums}/>
  <Route    path="/photos"   component={Photos}/>
  <Route    path="/user/:userId"   component={User}/>
  <Route    path="/lift"   component={StateLift}/>
  <Route    path="/hoc"   component={Hoc}/>
  <Route    path="/newEmployee"   component={NewEmployee}/>
  <Route    path="/editEmployee"   component={EditEmployee}/>
  <Route    path="/deleteEmployee"   component={DeleteEmployee}/>
  <Route    path="/employee-table"   component={EmployeeTable}/>
   
  
  
</div>
      
</div>

   
  </Router>
  );
}

export default App;
