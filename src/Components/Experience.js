import React from 'react'
import '../Styles/Experience.css'

const Experience = ({ company,role,duration,description }) => {
        return (
            <React.Fragment>
             
                 <div className="col-12 mt-5">
                    <div>
                        <h3>{ role }</h3>
                        <div className="d-flex">
                            <h5 className="text-success ml-2"> { company }</h5>
                             <span className="ml-5">{duration}</span>
                        </div>
                        <p className="mt-2">{description}</p>
    				</div>
                 </div>
                        
            </React.Fragment>
        )
    }

export default Experience;