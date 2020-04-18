import React,{Component} from 'react'
import {Link,Redirect} from "react-router-dom"
class Signin extends Component{
constructor(props){
super(props);
this.state={
email:"",
password:"",
err:"",
open:false,
Loading:false
}
this.handlechange=this.handlechange.bind(this);

}


handlechange= name=>e=>{    //Exactly in same order
this.setState({err:""})
this.setState({
  [name]:e.target.value
});


}

loader=()=>{
this.setState({Loading:false,open:true})

}

handleclick=(event)=>{

event.preventDefault();
const {email,password}=this.state
if(this.validator(email,password)){
const user={
   email:email,
   password:password

}
this.setState({Loading:true})
setTimeout(this.loader,3000);   //For time taken by Server
console.log(user);
this.setState({password:"",email:""})
}}

validator=(email,password)=>{

var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
if(!email||!password){
  this.setState({err:"Email and Password cant be empty"})
   return false;
}
if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
    this.setState({err:"Email not valid"});
    return false;
  
  }
 
 return true; 

}


signinform=()=>(
<form >
     
<div className="form-group">
      <label className="text-muted">Email </label>
      <input type="email" onChange={this.handlechange("email")} value={this.state.email} className="form-control"/>
      </div>
<div className="form-group">
      <label className="text-muted">Password </label>
      <input type="password" className="form-control"  value={this.state.password} onChange={this.handlechange("password")}/>
      </div>
<div className="py-3">
{ !this.state.Loading ? (
<button style={{borderRadius:"0"}} onClick={this.handleclick} className="btn btn-raised btn-primary font-weight-bold "> ENTER </button>
) : (
<button style={{borderRadius:"0"}} class="btn btn-primary btn-raised font-weight-bold" type="button" disabled>
  <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
  Loading...
</button>

)}
<button style={{borderRadius:"0"}} className="mx-md-5 mx-3 btn btn-raised btn-danger font-weight-bold"> FORGOT PASSWORD </button>
</div>
   </form>

    )


render(){
  if(this.state.open){
  return <Redirect to="/About" />
  }
  const {Loading}=this.state;
return(
<div  className="container pb-5"> 

<h2   className="mt-5 mb-3 font-weight-bold text-center">SIGNIN</h2>
 <div className="alert alert-danger" style={{display:this.state.err? "":"none"}}> {this.state.err}</div>
 
   {this.signinform()}

</div>
  )
}



}

export default Signin;