import React, { Component } from 'react';
import './styles/Contact.scss'

class Contact extends Component {
    state = {  }
    render() { 
        return (
            <div className="container contacting">
                <h2 className="text-warning mb-4">Contact</h2>
                <div className="row" style={{margin:'6% 0 6% 0'}} >
                    <div className="col-md-4">
                        <div className="text-center">
                        <i className="fa fa-3x fa-home"></i>
                        <h4 className="text-success mt-3">ADDRESS</h4>
                        <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="text-center">
                            <i className="fa fa-3x fa-location-arrow"></i>
                            <h4 className="text-success mt-3">EMAIL ADDRESS</h4>
                            <p><a href="/">info@yoursite.com</a></p>
                        </div>
                        
                    </div>
                    <div className="col-md-4">
                        <div className="text-center">
                        <i className="fa fa-3x fa-phone"></i>
                        <h4 className="text-success mt-3">CONTACT NUMBER</h4>
                        <p>+ 1235 2355 98</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
    
export default Contact
