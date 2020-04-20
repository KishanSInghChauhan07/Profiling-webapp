import React,{Component} from 'react'
import {Link} from "react-router-dom"
import AOS from 'aos'; 
import 'aos/dist/aos.css';
class Signup extends Component{
constructor(props){
super(props);
this.state={
email:"",
password:"",
name:"",
err:"",
open:false
}
this.handlechange=this.handlechange.bind(this);

}

componentDidMount(){
  AOS.init({duration:1200});
}

handlechange= name=>e=>{    //Exactly in same order
this.setState({err:""})
this.setState({
  [name]:e.target.value
});


}
handleclick=(event)=>{

event.preventDefault();
const {name,email,password}=this.state
if(this.validator(name,email,password)){

const user={
   name:name,
   email:email,
   password:password

}
console.log(user);
this.setState({open:true,password:"",name:"",email:""})
}}

validator=(name,email,password)=>{

var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
if(!name||!email||!password){
  this.setState({err:"Name ,Email,Password cant be empty"})
   return false;
}
if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
    this.setState({err:"Email not valid"});
    return false;
  
  }
 if(!password.match(passw)){
  this.setState({password:"",err:"Password must contain one UpperCase,one Lowercase and one digit,must be between 6-20 characters"})
  return false;
 } 

 return true; 

}


signupform=()=>(
<form>
     <div className="form-group">
      <label className="text-muted">Name </label>
      <input type="text" onChange={this.handlechange("name")} value={this.state.name} className="form-control"/>
      </div>
<div className="form-group">
      <label className="text-muted">Email </label>
      <input type="email" onChange={this.handlechange("email")} value={this.state.email} className="form-control"/>
      </div>
<div className="form-group">
      <label className="text-muted">Password </label>
      <input type="password" className="form-control"  value={this.state.password} onChange={this.handlechange("password")}/>
      </div>

<button style={{borderRadius:"0"}} onClick={this.handleclick} className="btn btn-raised btn-primary font-weight-bold "> SIGN UP </button>

   </form>

    )


render(){
return(

<div data-aos='fade-right' className="container pb-5"> 
<h2  data-aos='fade-up' className="mt-5 mb-3 font-weight-bold text-center">SIGNUP</h2>
 <div className="alert alert-danger" style={{display:this.state.err? "":"none"}}> {this.state.err}</div>
  
<div className="alert  alert-info" style={{display:this.state.open? "":"none"}}> New account has been created .Please <Link to="/signin">Sign In</Link></div>
 

   {this.signupform()}

</div>
  )
}



}

export default Signup;