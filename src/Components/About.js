import React, {Component} from 'react'
import '../styles/About.css'

class About extends Component{

    render(){
        return (
            <div id="about" className="row about-me">
                <div className="col-md-6">
                    <img id="avatar-image" src="/assets/images/avatar.png" alt="avatar"/>
                </div>
                <div className="col-md-6">
                    <h1>About Me</h1>
                    <h3>I am a freelance web developer. I like designing UI and working with 
                        front-end frameworks.
                    </h3>
                    <h3>Name: &nbsp;  John Doe</h3>
                    <h3>Location: &nbsp; New York (U.S.)</h3>
                    <h3>Date of Birth: &nbsp; 12-5-1990</h3>
                </div>
            </div>
        )
    }
} 

export default About