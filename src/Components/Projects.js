import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
const Projects = ({ title,image,description }) => {
   
    return(
        <div className="col-8 m-auto">
            <hr className="text-success" style={{ border: '2px solid', width: '10%' ,position:'absolute' , top: '9%' , left:'-12%'}} />
            <Card style={{background: 'inherit',border:'inherit'}} >
                <CardBody>
                <CardTitle className="text-success font-weight-bold text-capitalize mt-4" style={{fontSize:'22px'}}>{title}</CardTitle>
                </CardBody>
                <CardImg className="rounded" src={image} alt="Card image cap"  style={{width:'34%' ,paddingBottom:'4%' ,marginLeft:'2%'}} />
                <CardBody>
                    <CardText className="text-white" style={{marginBottom:'8%'}} >
                        {description}</CardText>
                </CardBody>
                <div className="d-flex flex-row-reverse" style={{position:'absolute',right:'3%',top:'10%',cursor:'pointer'}}>
      			&#10005;
      		</div>
            </Card>
            
        </div>
    );
        
}
 
export default Projects;