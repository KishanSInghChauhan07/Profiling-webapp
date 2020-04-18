import React,{Component} from 'react'
import '../Styles/Skills.css'

class Skills extends Component{

    render(){
        const skills = this.props.skills.filter((intern) => intern.internid === 0).map((skill) => {
            return(
                <div className="col-md-4 col-6 text-center">
                    <h3>{skill.name}</h3>
                    <span>{skill.rating}</span>
                </div>
            )
        })
        return (
           <div className="container">
            <h1 className="text-center">Skills</h1>
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