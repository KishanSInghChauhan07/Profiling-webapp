import React, { Component } from 'react';
import { Collapse, Button,Row, Col, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

class AddExperience extends Component {
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

           this.props.addExperience(values.company,values.role,values.description,values.duration,values.id)

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
                        <Label htmlFor="company" md={2}>Company Name</Label>
                        <Col md={10}>
                            <Control.text model=".company" id="company" name="company"
                                placeholder="Company Name"
                                className="form-control"
                                validators={{
                                    required
                                }}
                                />
                                <Errors
                                    className="text-warning"
                                    model=".company"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                    }}
                                />
                        </Col>
                    </Row>
                   
                    <Row className="form-group">
                        <Label htmlFor="role" md={2}>Role</Label>
                        <Col md={10}>
                            <Control.text model=".role" id="role" name="role"
                                placeholder="Role"
                                className="form-control"
                                validators={{
                                    required
                                }}
                                    />
                            <Errors
                                className="text-warning"
                                model=".role"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                   
                                }}
                                />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="description" md={2}>Description</Label>
                        <Col md={10}>
                            <Control.text model=".description" id="description" name="description"
                                placeholder="Description"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(50), maxLength: maxLength(200)
                                }}
                                    />
                            <Errors
                                className="text-warning"
                                model=".description"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be greater than 1 numbers',
                                    maxLength: 'Must be 3 numbers or less'
                                }}
                                />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="duration" md={2}>Duration</Label>
                        <Col md={10}>
                            <Control.text model=".duration" id="duration" name="duration"
                                placeholder="Duration"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(1), maxLength: maxLength(2), isNumber
                                }}
                                    />
                            <Errors
                                className="text-warning"
                                model=".duration"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be greater than 1 numbers',
                                    maxLength: 'Must be 3 numbers or less',
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
                   
                   
                 </LocalForm>
            </Collapse>
        </div>
    );
    }
}

export default AddExperience;
