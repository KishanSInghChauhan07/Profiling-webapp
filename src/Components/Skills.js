import React,{Component} from 'react'
import '../Styles/Skills.css'

class Skills extends Component{


    render(){
        return (
            <div className="container">
                <h1 className="text-center">Skills</h1>
                <div className="row">

                    <div className="col-md-4 col-6 text-center">
                        <h3>HTML5</h3>
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
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills