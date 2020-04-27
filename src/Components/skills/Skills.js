import React,{Component} from 'react'

import './Skills.scss'
// import { Progress } from 'reactstrap'
// import { TransitionGroup } from 'react-transition-group';
import AOS from 'aos'
import 'aos/dist/aos.css';
import {connect} from 'react-redux'
class Skills extends Component{
    componentDidMount(){
        AOS.init({ duration:1500});
    }
    render(){
// const skills = this.props.skills.filter((intern) => intern.internid === 0).map((skill) => {
//             return(
//                 <div className="col-6 text-center mb-5">
//                     <div className="d-flex justify-content-around">
//                         <h3>{skill.name}</h3>
//                         <h5>{skill.rating} <span>%</span></h5>
//                     </div>
                         
//                 <div style={{ marginLeft:"15%" }} class="progress" >
//   <div data-aos='fade-right' data-aos-easing="ease-in-sine" class="progress-bar bg-success" role="progressbar" style={{width:`${skill.rating}%`}}  aria-valuemin="0" aria-valuemax="100">

//    </div>
//  </div>
// </div>
//          )})
        
    //     const { name,rating } = this.props
    //     return(
    //         <div className="col-6 text-center mb-5">
    //             <div className="d-flex justify-content-around">
    //                 <h3>{name}</h3>
    //                 <h5>{rating} <span>%</span></h5>
    //             </div>
    //             <div style={{ marginLeft:"15%" }} class="progress" >
    //                 <div data-aos='fade-right' data-aos-easing="ease-in-sine" class="progress-bar bg-success" role="progressbar" style={{width:rating ? `${rating}%`:"0%"}}  aria-valuemin="0" aria-valuemax="100"></div>
    //             </div>
    //             <div className="delete-option">
    //   				&#10005;
    //   			</div>
    //         </div>
        
    //     )
    return(
        <div className="container">
            <div className="row">
                { this.props.currentSkills.map((skill) => {
                    return(
                        <div className="col-6 text-center mb-5">
                            <div className="d-flex justify-content-around">
                                <h3>{skill.name}</h3>
                                <h5>{skill.rating} <span>%</span></h5>
                            </div>
                            <div style={{ marginLeft:"15%" }} class="progress" >
                                <div data-aos='fade-right' data-aos-easing="ease-in-sine" class="progress-bar bg-success" role="progressbar" style={{width:skill.rating ? `${skill.rating}%`:"0%"}}  aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="delete-option">
                  				&#10005;
                  			</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
    }
}
        
const mapStateToProps = state => ({
    currentSkills: state.skills.currentSkills
})   


export default connect(mapStateToProps)(Skills);