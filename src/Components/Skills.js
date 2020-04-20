import React,{Component} from 'react'
import '../Styles/Skills.css'
import { Progress } from 'reactstrap'


class Skills extends Component{

    render(){
        const skills = this.props.skills.filter((intern) => intern.internid === 0).map((skill) => {
            return(
                <div className="col-6 text-center mb-5">
                    <div className="d-flex justify-content-around">
                        <h3>{skill.name}</h3>
                        <h5>{skill.rating} <span>%</span></h5>
                    </div>
                     <div style={{ marginLeft:"15%" }}>
                        <Progress  color="success" value= { skill.rating } />
                        
                    </div>
                </div>
            )
        })
        return (
           <div className="container mt-5">
            <h2 className="text-center text-warning">Skills</h2>
            <div className="row">
                {skills}
                {/* <div className="col-md-4 col-6 text-center">
                    <h3>HTML5</h3>
                    <span>8</span>
                </div>
                <div className="col-md-4 col-6 text-center">
                    <h3>CSS3</h3>
                </div>
                <div className="col-md-4 col-6 text-center">
                    <h3>Bootstrap</h3>
                </div>
                <div className="col-md-4 col-6 text-center">
                    <h3>JavaScript</h3>
                </div>
                <div className="col-md-4 col-6 text-center">
                    <h3>Web Design</h3>
                </div>
                <div className="col-md-4 col-6 text-center">
                    <h3>SEO</h3>
                </div> */}
            </div>
            </div>
        )
    }
}

export default Skills