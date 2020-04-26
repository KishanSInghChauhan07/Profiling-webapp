import React,{ Component } from 'react';
import  INTERNS_DATA from '../../Shared/Interns';
import { Card, CardImg, CardBody,CardTitle, CardSubtitle,CardText,Collapse } from 'reactstrap';
import './styles/Interns.css';
import AOS from 'aos'
import 'aos/dist/aos.css';


class Internrecruit extends Component{
    constructor(props) {
        super(props);
        this.state = {
          interns:INTERNS_DATA,
          isOpen:false,
          Openid:null
        };
    }

componentDidMount(){
        AOS.init({ duration:1500});
    }
    
    toggle=(id,that)=>{
        
        if(this.state.Openid==id){
        this.setState({isOpen:!this.state.isOpen,Openid:id})
           }
           else{
           this.setState({isOpen:true,Openid:id})

           }
    }

    render(){

        const interns = this.state.interns.map((intern) => {
            return(
<div  style={{alignSelf:"center"}} className="col-md-12 my-3  text-center px-0" >
                
<Card  style={{background:'inherit'}}>
                        <CardBody style={{margin:"0",padding:"0"}} >
                        <CardTitle onClick={this.toggle.bind(this,intern.id)} style={{fontSize:"29px"}} className="text-warning" style={{fontSize:'20px'}}>{intern.name} <span style={{float:"right"}}> { this.state.isOpen&&this.state.Openid==intern.id ? (<i class="fa fa-chevron-up"> </i>):(<i class="fa fa-chevron-down"> </i>)} </span> </CardTitle>
                        <CardSubtitle style={{fontSize:"25px"}} className="text-success">{intern.category}</CardSubtitle>
                            </CardBody>
                               <div className="my-2">
                                <CardImg  className="rounded-circle" src={intern.image} alt="Card image cap"  style={{ height:'155px',width:'25%'}} /> </div>
                             <Collapse isOpen={this.state.isOpen&&this.state.Openid==intern.id}>
                            <CardBody>
              <CardSubtitle style={{fontSize:"25px"}} className="text-success py-2">EDUCATION</CardSubtitle>
              <CardText> 
           <table class="table table-bordered">
                   <thead>
                    <tr>
                  <th>   Name </th>
                   <th scope="col">Specialization</th>
                   <th scope="col">Grade</th>
                    </tr>
                   </thead>
                    <tbody>
                { intern.education.map((edu)=>{
             return(
           <tr>   
           <td className="col-md-4" >{edu.name} </td>
          <td className="col-md-4" > {edu.specialization} </td>
           <td className="col-md-4" >{edu.grade} %</td>
             </tr>       )

              })}</tbody> </table></CardText>
                 <CardSubtitle style={{fontSize:"25px"}} className="text-success py-2">SKILLS</CardSubtitle>
              <CardText>  { intern.skills.map((skill)=>{
             return(
           <div> 
{skill.name}
<div  style={{ marginLeft:"15%",marginRight:"15%" }}  class="progress " >
                    <div class="progress-bar bg-success animated slow slideInLeft delay-1s" role="progressbar" style={{width:`${skill.rating}%`}}  aria-valuemin="0" aria-valuemax="100">{skill.rating}%</div>
                </div>

          
           
             </div>       )

              })}</CardText>

 <CardSubtitle style={{fontSize:"25px"}} className="text-success py-2">PROJECTS</CardSubtitle>
                  <CardText>  
                  <table class="table table-bordered">
                   <thead>
                    <tr>
                  
                   <th scope="col">Title</th>
                   <th scope="col">Description</th>
                    </tr>
                   </thead>
                    <tbody>

                  { intern.projects.map((project)=>{
             return(
           <tr>   
           <td>{project.title} </td>
           
           <td>{project.description} </td>
                       </tr>       )

              })} </tbody> </table>   </CardText>
              
                        </CardBody>
                        </Collapse>
                        
                    </Card>
                </div>    )
        })
        return (
            <div className="container px-md-5"  >
                { interns }
            </div>
        )
    }
}

export default Internrecruit