import React  from 'react';
import './education.scss'

const Education = ( { duration,specialization,grade,name}) => {

		return(
			
			<div className="col-12 text-capitalize">
				
                <hr className="text-success" />
				<div style={{ position: 'relative' , left: '8%'}}>
					<div className="d-flex flex-row ">
						<h3 className="text-success">{name}</h3>
						<span style={{ marginLeft: '12rem' , paddingTop: '6px'}}>{duration}</span>
					</div>
					<h5 className="d-flex flex-row">{specialization}</h5>
					<h6 className="d-flex flex-row">{grade}<span>%</span></h6>
					<div  className="delete-option">
      				  &#10005;
      				</div>
				</div>
				
			</div>
			)
		}
		
export default Education;