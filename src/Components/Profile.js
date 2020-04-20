import React, { Component } from 'react';
import About from './About';
import  INTERNS_DATA  from '../Shared/Interns';
import Contact from './Contact';



class profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          interns:INTERNS_DATA
          
        };
    }
    render() { 
        const { interns } = this.state;

        return ( 
            <div className="container">
                { interns.filter((idx) => idx.id === 0 ).map(({ id, ...otherCollectionProps }) => (
                    <About key={id} {...otherCollectionProps} />
                
                ))}
                <Contact />       
            </div>
        );
    }
}
 
export default profile;