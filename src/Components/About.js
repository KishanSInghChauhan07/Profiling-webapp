import React, {Component} from 'react';
import { Button } from 'reactstrap';
import '../Styles/About.css'

class About extends Component{
    
   
    render(){
    
        return (
            <div className="container">
                <div id="about" className="row about-me">
                <div className="col-md-6" style={{ padding: '0px 59px' ,overflow:'hidden'}}>
                    <img id="avatar-image" src={this.props.interns[0].image} alt="avatar"  />
                </div>
                <div className="col-md-6">
                    <h1 className="font-weight-bold text-warning mb-4">About</h1>
                    <h3 className="Info mb-4">{this.props.interns[0].about}
                    </h3>
                    <h3 className="font-weight-normal mb-2">Name : &nbsp; <span className="font-weight-lighter Info">{this.props.interns[0].name}</span> </h3>
                    <h3 className="font-weight-normal mb-2">Location : &nbsp; <span className="font-weight-lighter Info">{this.props.interns[0].location}</span></h3>
                    <h3 className="font-weight-normal mb-2">Date of Birth : &nbsp; <span className="font-weight-lighter Info">{this.props.interns[0].dob}</span></h3>
                    <h3 className="font-weight-normal mb-2">Email : &nbsp; <span className="font-weight-lighter Info">{this.props.interns[0].email}</span></h3>
                    <h3 className="font-weight-normal mb-4">Phone : &nbsp; <span className="font-weight-lighter Info">{this.props.interns[0].phone}</span></h3>
                    <h3><span className="text-warning mr-3">10</span><span className="font-weight-lighter Info">Projects Completed</span> </h3>
                    <Button color="success" className="mt-3 btn p-3">Resume</Button>{' '}
                </div>
            </div>
            </div>
            
        )
    }
} 

export default About;