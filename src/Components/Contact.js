import React, { Component } from 'react';
import '../Styles/Contact.css'

class contact extends Component {
    state = {  }
    render() { 
        return (
            <div className="container">
                <h1 className="text-center">Contact</h1>
                <div className="row">
                    <div className="col-md-4">
                        <div className="text-center">
                        <i className="fa fa-3x fa-home"></i>
                        <h3>ADDRESS</h3>
                        <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="text-center">
                            <i className="fa fa-3x fa-location-arrow"></i>
                            <h3>EMAIL ADDRESS</h3>
                            <p><a>info@yoursite.com</a></p>
                        </div>
                        
                    </div>
                    <div className="col-md-4">
                        <div className="text-center">
                        <i className="fa fa-3x fa-phone"></i>
                        <h3>CONTACT NUMBER</h3>
                        <p>+ 1235 2355 98</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
    
export default contact
