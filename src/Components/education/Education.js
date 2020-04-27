import React  from 'react';
import './education.scss'
import {connect} from 'react-redux'

const Education = ({currentEducation}) => {
	return(
		<div className= "container">
			<div className="row text-centre">
			{ currentEducation.map(education => {
				return(
					<div className="col-12 text-capitalize">
						<hr className="text-success" />
						<div style={{ position: 'relative' , left: '8%'}}>
							<div className="d-flex flex-row ">
								<h3 className="text-success">{education.name}</h3>
								<span style={{ marginLeft: '12rem' , paddingTop: '6px'}}>{education.year}</span>
							</div>
							<h5 className="d-flex flex-row">{education.specialization}</h5>
							<h6 className="d-flex flex-row">{education.grade}<span>%</span></h6>
							<div  className="delete-option">
								&#10005;
							</div>
						</div>
					</div>
					)}
				)}
			</div>
		</div>
	)
}
	
const mapStateToProps = state =>({
    currentEducation: state.education.currentEducation
})
		
export default connect(mapStateToProps)(Education);