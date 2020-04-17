import React,{Component} from 'react'
import '../Styles/Education.css'

class Education extends Component{
	render(){
		const education = this.props.education.filter((intern) => intern.internid === 0 ).map((education) => {
			return(
				<div className="col-12 text-capitalize mt-5">
                    <hr style={{ border: '2px solid #ffc107', width: '4%' ,position:'absolute'}} />
					<div style={{ position: 'relative' , left: '8%'}}>
                    	<div className="d-flex flex-row ">
							<h3 className="text-warning">{education.name}</h3>
							<span style={{ marginLeft: '12rem' , paddingTop: '6px'}}>{education.duration}</span>
						</div>
						<h5 className="d-flex flex-row">{education.specialization}</h5>
						<h6 className="d-flex flex-row">{education.grade}<span>%</span></h6>
					</div>	
    			</div>
			)
		})
		return (
            <div className="container">
				<div className="row education text-center">
					{education}
                    {/* <div className="col-12 text-capitalize mt-5">
                    <hr style={{ border: '2px solid #ffc107', width: '4%' ,position:'absolute'}} />
					<div style={{ position: 'relative' , left: '8%'}}>
                    	<div className="d-flex flex-row ">
	
							<h3 className="text-warning">College of engineering roorkee</h3>
    						<span style={{ marginLeft: '12rem' , paddingTop: '6px'}}>2014-2015</span>
						</div>
						
    					<h5 className="d-flex flex-row">b.tech</h5>
						<h6 className="d-flex flex-row">70 <span>%</span></h6>

    				</div>	
    				
                    </div>
					<div className="col-12 text-capitalize mt-5">
                    <hr style={{ border: '2px solid #ffc107', width: '4%' ,position:'absolute'}} />
					<div style={{ position: 'relative' , left: '8%'}}>
                    	<div className="d-flex flex-row ">
	
							<h3 className="text-warning">Chatrapati Shivaji Inter College</h3>
    						<span style={{ marginLeft: '12rem' , paddingTop: '6px'}}>2014-2015</span>
						</div>
						
    					<h5 className="d-flex flex-row">12</h5>
						<h6 className="d-flex flex-row">86 <span>%</span></h6>

    				</div>	
    				
                    </div>
					<div className="col-12 text-capitalize mt-5">
                    <hr style={{ border: '2px solid #ffc107', width: '4%' ,position:'absolute'}} />
					<div style={{ position: 'relative' , left: '8%'}}>
                    	<div className="d-flex flex-row ">
	
							<h3 className="text-warning">DNS HSS Education center</h3>
    						<span style={{ marginLeft: '12rem' , paddingTop: '6px'}}>2014-2015</span>
						</div>
						
    					<h5 className="d-flex flex-row">10</h5>
						<h6 className="d-flex flex-row">91 <span>%</span></h6>

    				</div>	
    				
                    </div>  */}
                </div>
            </div>
        )
    }
}
export default Education;