import React,{Component} from 'react'
import '../Styles/Education.css'

class Education extends Component{


    render(){
        return (
            <div className="container">
                <h1 className="text-center">Education</h1>
                <div className="row education">
                    <div className="col-md-6">
                    <div>
    					<span>2014-2015</span>
    					<h2>Master Degree of Design</h2>
    					<span>Cambridge University</span>
    					<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
    				</div>
                    </div>
                    <div className="col-md-6">
                    <div>
    					<span>2014-2015</span>
    					<h2>Master Degree of Design</h2>
    					<span>Cambridge University</span>
    					<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
    				</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Education