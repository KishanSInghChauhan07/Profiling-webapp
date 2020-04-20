import React,{ Component } from 'react';
import  INTERNS_DATA from '../Shared/Interns';

import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
          interns:INTERNS_DATA,
        };
    }
    render() { 
        const interns = this.state.interns.map((interns) => {
            return (
                <div className="col-md-4 text-center" >
                    <Card style={{background:'inherit',border:'none'}}>
                        <CardBody>
                        <CardTitle className="text-warning" style={{fontSize:'20px'}}>{interns.name}</CardTitle>
                        <CardSubtitle className="text-success">{interns.category}</CardSubtitle>
                            </CardBody>
                                <CardImg  className="rounded-circle" src={interns.image} alt="Card image cap"  style={{width:'34%',marginLeft:'31%'}} />
                            <CardBody>
                       
                        </CardBody>
                    </Card>
                </div>
            )

        })
        return ( 
            <div className="container">
                <div className="row">
                    { interns }
                </div>
                
            </div>
        );
    }
}
 
export default Admin