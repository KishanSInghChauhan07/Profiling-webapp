import React,{ Component } from 'react';
import './styles/Admin.css'
import Interns from './Interns';

class Admin extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = (event)=>{
        event.preventDefault()
        
    }

    render() { 
        return ( 
            <div className="container">
                <div className="text-center" id="search">
                    <h3>SEARCH FOR INTERNS</h3>
                    <form onSubmit={ this.handleSubmit }>
                    <input id="search-box" type="text" placeholder="Type any category"/>
                    <button type="submit" id="search-button"><i className="fa fa-search"></i></button>
                    </form>
                </div>
                <Interns history={this.props.history}/>
            </div>
        );
    }
}
 
export default Admin