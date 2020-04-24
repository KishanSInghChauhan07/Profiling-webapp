import React,{useState} from 'react';
import './styles/About.scss'
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import { Collapse, Button, CardBody, Card } from 'reactstrap';


const About = ({ image,name,location,phone,email,dob,about,education ,skills,experience,projects}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
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
            <h2 className="text-center text-warning mb-4">Education</h2>
            <div className="education-form">
                <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
                <Collapse isOpen={isOpen}>
                    <Card>
                    <CardBody>
                    Anim pariatur cliche reprehenderit,
                    enim eiusmod high life accusamus terry richardson ad squid. Nihil
                    anim keffiyeh helvetica, craft beer labore wes anderson cred
                    nesciunt sapiente ea proident.
                    </CardBody>
                    </Card>
                </Collapse>
			</div>
            <div className="row text-center">
            { education
                .map(({ id, ...otherItemProps }) => (
                <Education key={id} {...otherItemProps} />
            ))}
            </div>
            <h2 className="text-center text-warning">Skills</h2>
            <div className="row">
                { skills
                    .map(({ id, ...otherItemProps }) => (
                    <Skills key={id} {...otherItemProps} />
                ))}
            </div>
            <div className="container mt-5 pl-5">

            <h2 className="text-center text-warning">Experience</h2>
            <div className="row  mb-3">
                { experience
                    .map(({ id, ...otherItemProps }) => (
                    <Experience key={id} {...otherItemProps} />
                ))}
            </div>
            </div>
            <h2 className="text-center text-warning mt-4">Projects</h2>
            <div className="row">
                { projects
                    .map(({ id, ...otherItemProps }) => (
                    <Projects key={id} {...otherItemProps} />
                ))}
            </div>
        </div>
            
    )
}


export default About;