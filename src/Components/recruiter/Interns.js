import React,{ Component } from 'react';
import  INTERNS_DATA from '../../Shared/Interns';
import { Card, CardImg, CardBody,CardTitle, CardSubtitle } from 'reactstrap';
import './styles/Interns.css';


class Internrecruit extends Component{
    constructor(props) {
        super(props);
        this.state = {
          interns:INTERNS_DATA,
        };
    }

    viewProfile = ()=>{
        this.props.history.push('/Profile')
    }

    render(){

        const interns = this.state.interns.map((interns) => {
            return (
                <div className="interns col-md-4 text-center" >
                    <Card style={{background:'inherit',border:'none'}}>
                        <CardBody>
                        <CardTitle className="text-warning" style={{fontSize:'20px'}}>{interns.name}</CardTitle>
                        <CardSubtitle className="text-success">{interns.category}</CardSubtitle>
                            </CardBody>
                                <CardImg  className="rounded-circle" src={interns.image} alt="Card image cap"  style={{ height:'145px',width:'45%',marginLeft:'28%'}} />
                            <CardBody>
                        </CardBody>
                        <div className="text-center">
                            <button id="view-profile" 
                                    className="btn btn-success"
                                    onClick={this.viewProfile}>
                                    View Profile
                            </button>
                        </div>
                    </Card>
                </div>
            )
        })
        return (
            <div className="row">
                { interns }
            </div>
        )
    }
}

export default Internrecruit
