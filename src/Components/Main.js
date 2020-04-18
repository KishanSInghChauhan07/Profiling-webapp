import React, { Component } from 'react';
import Header from './Navbar';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience'
import Profile from './Profile';
import Signup from "./Signup"
import Footer from './Footer';
import { INTERNS } from '../Shared/Interns';
import { PROJECTS } from '../Shared/Projects';
import { SKILLS } from '../Shared/Skills';
import { EDUCATION } from '../Shared/Education';

import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
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
            <>
                <Header />
                
                <Switch>
                    <Route exact path="/Signup" component={Signup} />
                    <Route exact path='/About' component = {() => <About interns={this.state.interns} /> } />
                    <Route exact path='/Experience' component={Experience} />
                    <Route exact path='/Contact' component={Contact} />
                    <Route exact path='/Projects' component={() => <Projects  projects = { this.state.projects }/> } />
                    <Route exact path='/Skills' component={() => <Skills  skills = { this.state.skills }/> } />
                    <Route exact path='/Education' component={() => <Education  education = { this.state.education }/> } />
                    <Route exact path='/Profile' component={Profile} />
                    <Redirect to="/About" />
                </Switch>
                <Footer/>
            
            </>
        );
    }
}
 
export default Main;