import React from 'react';
import './styles/About.scss'
import Education from './education/Education';
import Skills from './skills/Skills';
import Experience from './experience/Experience';
import Projects from './projects/Projects';
import { Button } from 'reactstrap';
import AddEducation from './education/AddEducation';
import AddProject from './projects/AddProject';
import AddSkill from './skills/AddSkill';
import AddExperience from './experience/AddExperience';

import {connect} from 'react-redux';
import { setCurrentEducation} from '../redux/education/education-actions'



const About = ({ image,name,location,phone,email,dob,about,education ,skills,experience,projects,setCurrentEducation}) => {                
        return (
            <div className="container">
                <div id="about" className="row about-me">
                    <div className="col-md-6" style={{ padding: '0px 59px' ,overflow:'hidden'}}>
                        <img className="avatar-image" src={ image } alt="avatar"  />
                    </div>
                    <div className="col-md-6">
                        <h1 className="font-weight-bold text-warning mb-4">About</h1>
                        <h3 className="Info mb-4">{ about }
                        </h3>
                        <h3 className="font-weight-normal mb-2">Name : &nbsp; <span className="font-weight-lighter Info">{ name }</span> </h3>
                        <h3 className="font-weight-normal mb-2">Location : &nbsp; <span className="font-weight-lighter Info">{ location }</span></h3>
                        <h3 className="font-weight-normal mb-2">Date of Birth : &nbsp; <span className="font-weight-lighter Info">{ dob }</span></h3>
                        <h3 className="font-weight-normal mb-2">Email : &nbsp; <span className="font-weight-lighter Info">{ email }</span></h3>
                        <h3 className="font-weight-normal mb-4">Phone : &nbsp; <span className="font-weight-lighter Info">{ phone }</span></h3>
                        <h3><span className="text-warning mr-3">10</span><span className="font-weight-lighter Info">Projects Completed</span> </h3>
                        <Button color="success" className="mt-3 btn p-3">Resume</Button>{' '}
                    </div>
                </div>
                <h2 className="text-warning">Education</h2>
                <AddEducation setCurrentEducation={setCurrentEducation}/>
                <div className="row text-center">
                { education
                    .map(({ id, ...otherItemProps }) => (
                    <Education key={id} {...otherItemProps} />
                ))}
                </div>
                <h2 className="text-warning" style={{marginTop:'6rem' }}>Skills</h2>
                <AddSkill />
                <div className="row ">
                    { skills
                        .map(({ id, ...otherItemProps }) => (
                        <Skills key={id} {...otherItemProps} />
                    ))}
                </div>
                <div className="container mt-5">

                    <h2 className="text-warning">Experience</h2>
                    <AddExperience />
                    <div className="row pl-5 mb-3">
                        { experience
                            .map(({ id, ...otherItemProps }) => (
                            <Experience key={id} {...otherItemProps} />
                        ))}
                    </div>
                </div>
                <h2 className="text-warning mt-5">Projects</h2>
                <AddProject />
                <div className="row">
                    { projects
                        .map(({ id, ...otherItemProps }) => (
                        <Projects key={id} {...otherItemProps} />
                    ))}
                </div>
        </div>
            
    )
}

// const mapStateToProps = 

const mapDispatchToProps = dispatch => ({
    setCurrentEducation: (grade,specialization,name,year) => dispatch(setCurrentEducation(grade,specialization,name,year))
  });


export default connect(mapDispatchToProps)(About);