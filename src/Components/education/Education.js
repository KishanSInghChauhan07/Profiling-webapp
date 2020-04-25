import React  from 'react';


const Education = ( { duration,specialization,grade,name}) => {

		return(
			
			<div className="col-12 text-capitalize mt-5" style={{position:'relative'}}>
				
                <hr className="text-success" style={{ border: '2px solid', width: '2%' ,position:'absolute'}} />
				<div style={{ position: 'relative' , left: '8%'}}>
					<div className="d-flex flex-row ">
						<h3 className="text-success">{name}</h3>
						<span style={{ marginLeft: '12rem' , paddingTop: '6px'}}>{duration}</span>
					</div>
					<h5 className="d-flex flex-row">{specialization}</h5>
					<h6 className="d-flex flex-row">{grade}<span>%</span></h6>
					<div className="d-flex flex-row-reverse" style={{position:'absolute',right:'5%',top:'10%',cursor:'pointer'}}>
      				  &#10005;
      				</div>
				</div>
				
			</div>
			)
		}
		
export default Education;