import React,{Component} from 'react'
import '../Styles/Login.css'

class Login extends Component{
    constructor(props){
        super()
        this.state = {
            email:'',
            password:''
        }
    }

    handleChange = (name,value) =>{
        this.setState((prevState)=>{
            return {
                ...prevState,
                [name]:value
            }
        })
    }
    handleSubmit = () =>{
        if(this.state.email === 'mentor'){
            this.props.history.push('/Mentor')
        }
        else{
            this.props.history.push('/About')
        }
    }

    render(){
        return (
            <div className="login-page container-fluid">
                <div className="login-form text-center">
                <h1>Profiling App Login</h1>
                <form onSubmit={this.handleSubmit}>
                <div className="login-input">
                    <input name="email" type="text" placeholder="Email or Username" required onChange={(e)=>this.handleChange(e.target.name,e.target.value)}/>
                </div>
                <div className="login-input">
                    <input name="password" type="password" placeholder="Password" onChange={(e)=>this.handleChange(e.target.name,e.target.value)}/>
                </div>
                <div>
                    <input className="login-submit btn btn-primary" 
                           type="submit" 
                           value="Login"
                    />
                </div>
                </form>
                <div>
                    <span>Create an account? </span><a href="/Signup">Sign Up</a>
                </div>
                </div>
            </div>
        )
    }
}

export default Login