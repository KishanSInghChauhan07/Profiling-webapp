import React, { Component } from 'react';
import { Collapse, Button,Row, Col, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

class AddEducation extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isNavOpen: false
        };
    }

    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }

    handleSubmit(values){
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        // event.preventDefault();
    }
    

    render(){
        const required = (val) => val && val.length;
        const maxLength = (len) => (val) => !(val) || (val.length <= len);
        const minLength = (len) => (val) => val && (val.length >= len);
        const isNumber = (val) => !isNaN(Number(val));
        return (
            <div>
            <h5 onClick={this.toggle } style={{ marginBottom: '1rem' ,cursor:'pointer', position:'relative',display: 'flex',justifyContent:'flex-end',bottom: '40px'}}>Add more</h5>
                <Collapse isOpen={this.state.isOpen}>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                    <Row className="form-group">
                        <Label htmlFor="name" md={2}>Collge/school Name</Label>
                        <Col md={10}>
                            <Control.text model=".name" id="name" name="name"
                                placeholder="College/School Name"
                                className="form-control"
                                validators={{
                                    required
                                }}
                                />
                                <Errors
                                    className="text-warning"
                                    model=".name"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                    }}
                                />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="specialization" md={2}>Specialization</Label>
                        <Col md={10}>
                            <Control.text model=".specialization" id="grade" name="grade"
                                placeholder="Specialization"
                                className="form-control"
                                validators={{
                                    required
                                }}
                                    />
                            <Errors
                                className="text-warning"
                                model=".specialization"
                                show="touched"
                                messages={{
                                    required: 'Required'
                            
                                }}
                                />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="grade" md={2}>Grade</Label>
                        <Col md={10}>
                            <Control.text model=".grade" id="grade" name="grade"
                                placeholder="Grade"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(1), maxLength: maxLength(2), isNumber
                                }}
                                    />
                            <Errors
                                className="text-warning"
                                model=".grade"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be greater than 0 numbers',
                                    maxLength: 'Must be 3 numbers or less',
                                    isNumber: 'Must be a number'
                                }}
                                />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="year" md={2}>Year</Label>
                        <Col md={10}>
                            <Control.text model=".year" id="year" name="year"
                                placeholder="Pass year"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(4), maxLength: maxLength(4), isNumber
                                }}
                                    />
                            <Errors
                                className="text-warning"
                                model=".year"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be greater than 3 numbers',
                                    maxLength: 'Must be 5 numbers or less',
                                    isNumber: 'Must be a number'
                                }}
                                />
                        </Col>
                    </Row>
                    <Row className="form-group d-flex">
                        <Col md={{size:10, offset: 2}}>
                            <Button type="submit" color="success">
                               ADD
                            </Button>
                        </Col>
                        
                    </Row>
                    <Row className="form-group d-flex">
                        <Col md={{size:10, offset: 2}}>
                            <Button color="success">
                               Cancel
                            </Button>
                        </Col>
                        
                    </Row>
                   
                 </LocalForm>
            </Collapse>
        </div>
    );
    }
}

export default AddEducation;
