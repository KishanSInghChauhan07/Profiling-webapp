import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
class Project extends Component {
    state = {  }
    handelClick = () => {
        console.log(this.props.projects.filter((intern) => intern.internid === 0 )) 
    }
    render() { 
        const project = this.props.projects.filter((intern) => intern.internid === 0 ).map((project) => {
            return(
                <div className="col-8 m-auto">
                    <hr style={{ border: '2px solid #ffc107', width: '10%' ,position:'absolute' , top: '9%' , left:'-12%'}} />
                    <Card style={{background: 'inherit',border:'inherit'}} >
                        <CardBody>
                        <CardTitle className="text-warning font-weight-bold text-capitalize mt-4" style={{fontSize:'20px'}}>{project.title}</CardTitle>
                        </CardBody>
                        <CardImg  onClick={this.handelClick} className="rounded" src={project.image} alt="Card image cap"  style={{width:'34%' ,paddingBottom:'4%' ,marginLeft:'2%'}} />
                        <CardBody>
                            <CardText className="text-white" style={{marginBottom:'8%'}} >
                                {project.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
            
        }) 
        return (
            <div className="container">
                <div className="row">
                    { project }
                    {/* <div className="col-8 m-auto">
                    <hr style={{ border: '2px solid #ffc107', width: '10%' ,position:'absolute' , top: '9%' , left:'-12%'}} />
                        <Card style={{background: 'inherit',border:'inherit'}} >
                            <CardBody>
                                <CardTitle className="text-warning font-weight-bold text-capitalize mt-4" style={{fontSize:'20px'}}>yelpcamp</CardTitle>
                            </CardBody>
                            <CardImg  className="rounded" src="/assets/images/123.png" alt="Card image cap"  style={{width:'34%' ,paddingBottom:'4%' ,marginLeft:'2%'}} />
                            <CardBody>
                                <CardText className="text-white" style={{marginBottom:'8%'}} >
                                    This is the basic to intermediate level of the project. 
                                    Here a user can log in and share their experience of any camping location or campground and 
                                    these locations will be shown to the other users. Users can also comment on the location and show their interest in those locations.</CardText>
                            </CardBody>
                        </Card>

                    </div>

                    <div className="col-8 m-auto">
                    <hr style={{ border: '2px solid #ffc107', width: '10%' ,position:'absolute' , top: '9%' , left:'-12%'}} />
                        <Card style={{background: 'inherit',border:'inherit'}} >
                            <CardBody>
                                <CardTitle className="text-warning font-weight-bold text-capitalize mt-4" style={{fontSize:'20px'}}>yelpcamp</CardTitle>
                            </CardBody>
                            <CardImg className="rounded" src="/assets/images/123.png" alt="Card image cap"  style={{width:'34%' ,paddingBottom:'4%' ,marginLeft:'2%'}} />
                            <CardBody>
                                <CardText className="text-white" style={{marginBottom:'8%'}} >
                                    This is the basic to intermediate level of the project. 
                                    Here a user can log in and share their experience of any camping location or campground and 
                                    these locations will be shown to the other users. Users can also comment on the location and show their interest in those locations.</CardText>
                            </CardBody>
                        </Card>
                    </div> */}
                </div>
            </div>
        );
    }
}
 
export default Project;