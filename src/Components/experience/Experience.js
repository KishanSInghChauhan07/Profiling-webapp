import React from 'react';
import {connect} from 'react-redux'

const Experience = ({ currentExperience }) => {
    return (
        <div className="row pl-5 mb-3">
            { currentExperience.map((experience) =>{
                return(
                    <div className="col-12 mt-5">
                    <div>
                        <h3>{ experience.role }</h3>
                        <div className="d-flex">
                            <h5 className="text-success ml-2"> { experience.company }</h5>
                            <span className="ml-5">{experience.duration}</span>
                        </div>
                        <p className="mt-2">{experience.description}</p>
                    </div>
                    <div className="delete-option">
                        &#10005;
                      </div>
                </div>
                )
            }) }
        </div>
        
       
                
        
    )
}

const mapStateToProps = state => ({
    currentExperience: state.experience.currentExperience
})   
    

export default connect(mapStateToProps)(Experience);