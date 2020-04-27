import React, { Component } from 'react';
import { Collapse, Button,Row, Col, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

class AddSkill extends Component {
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
        
        this.props.addSkills(values.name,values.rating,values.id)

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
                        <Label htmlFor="name" md={2}>Skill Name</Label>
                        <Col md={10}>
                            <Control.text model=".name" id="name" name="name"
                                placeholder="Skill Name"
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
                        <Label htmlFor="rating" md={2}>Rating</Label>
                        <Col md={10}>
                            <Control.text model=".rating" id="rating" name="rating"
                                placeholder="Rating"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(1), maxLength: maxLength(3), isNumber
                                }}
                                    />
                            <Errors
                                className="text-warning"
                                model=".rating"
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

export default AddSkill;
