import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

class Project extends Component {
    state = {  }
    render() { 
        return (
            <div className="container">
                <h1 className="text-center">Projects</h1>
                <div className="row">
                    <div className="col-md-6">
                        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                        <CardTitle><h2 className="text-center">Website Design</h2></CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        </Card>
                    </div>
                    <div className="col-md-6">
                        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                        <CardTitle><h2 className="text-center">Website Design</h2></CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Project;