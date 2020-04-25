import React from 'react';
import './Projects.scss'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
const Projects = ({ title,image,description }) => {
   
    return(
        <div className="col-8 m-auto">
            <hr className="text-success" />
            <Card style={{background: 'inherit',border:'inherit'}} >
                <CardBody>
                <CardTitle className="text-success font-weight-bold text-capitalize mt-4" style={{fontSize:'22px'}}>{title}</CardTitle>
                </CardBody>
                <CardImg className="rounded" src={image} alt="Card image cap"/>
                <CardBody>
                    <CardText className="text-white" style={{marginBottom:'8%'}} >
                        {description}</CardText>
                </CardBody>
                <div className="delete-option">
      			    &#10005;
      		    </div>
            </Card>
            
        </div>
    );
        
}
 
export default Projects;