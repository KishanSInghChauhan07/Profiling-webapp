import React,{Component} from 'react'
import '../Styles/Skills.scss'
// import { Progress } from 'reactstrap'
// import { TransitionGroup } from 'react-transition-group';
import AOS from 'aos'
import 'aos/dist/aos.css';

class Skills extends Component{

componentDidMount(){
  AOS.init({ duration:1500});
}


    render(){

        const { name,rating } = this.props
            return(
                <div className="col-6 text-center mb-5">
                    <div className="d-flex justify-content-around">
                        <h3>{name}</h3>
                        <h5>{rating} <span>%</span></h5>
                    </div>
                    <div style={{ marginLeft:"15%" }} class="progress" >
                        <div data-aos='fade-right' data-aos-easing="ease-in-sine" class="progress-bar bg-success" role="progressbar" style={{width:rating ? `${rating}%`:"0%"}}  aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            )
        }
    }
        
    


export default Skills;