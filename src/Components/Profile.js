import React, { Component } from 'react';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import About from './About';
import Skills from './Skills';
import { INTERNS } from '../Shared/Interns';
import { PROJECTS } from '../Shared/Projects';
import { SKILLS } from '../Shared/Skills';
import { EDUCATION } from '../Shared/Education';

class profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          interns:INTERNS,
          projects:PROJECTS,
          skills:SKILLS,
          education:EDUCATION
        };
    }
    render() { 
        return ( 
        <div className="container">
            <About interns={this.state.interns}/>
            <Education education = { this.state.education }/>
            <Skills skills = { this.state.skills }/>
            <Experience />
            <Projects projects = { this.state.projects }/>
            <Contact />
        </div>
        );
    }
}
 
export default profile;