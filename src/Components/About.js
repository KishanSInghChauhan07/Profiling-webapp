import React, {Component} from 'react';
import { Button } from 'reactstrap';
import '../Styles/About.css'

class About extends Component{

    render(){
        return (
            <div className="container">
                <div id="about" className="row about-me">
                <div className="col-md-6" style={{ padding: '0px 59px' }}>
                    <img id="avatar-image" src="/assets/images/download.png" alt="avatar"  />
                </div>
                <div className="col-md-6">
                    <h1 className="font-weight-bold text-warning mb-4">About</h1>
                    <h3 className="Info mb-4">I am a freelance web developer. I like designing UI and working with 
                        front-end frameworks.
                    </h3>
                    <h3 className="font-weight-normal mb-2">Name : &nbsp; <span className="font-weight-lighter Info">John Doe</span> </h3>
                    <h3 className="font-weight-normal mb-2">Location : &nbsp; <span className="font-weight-lighter Info">Delhi (India)</span></h3>
                    <h3 className="font-weight-normal mb-2">Date of Birth : &nbsp; <span className="font-weight-lighter Info">20-10-1998</span></h3>
                    <h3 className="font-weight-normal mb-2">Email : &nbsp; <span className="font-weight-lighter Info">Triceria.try@gmail.com</span></h3>
                    <h3 className="font-weight-normal mb-4">Phone : &nbsp; <span className="font-weight-lighter Info">I'll not tell you,Sorry</span></h3>
                    <h3><span className="text-warning mr-3">10</span><span className="font-weight-lighter Info">Projects Completed</span> </h3>
                    <Button color="warning" className="mt-3 btn p-3">Resume</Button>{' '}
                </div>
            </div>
            </div>
            
        )
    }
} 

export default About