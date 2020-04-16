import React,{Component} from 'react'
import '../Styles/Experience.css'

class Experience extends Component{

    render(){
        return (
            <React.Fragment>
                <h1 className="text-center">Experience</h1>
                <div className="row education">
                    <div className="col-md-6">
                    <div>
    					<span>2017-2018</span>
    					<h2>UI/UX Designer</h2>
    					<span>Cambridge University</span>
    					<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
    				</div>
                    </div>
                    <div className="col-md-6">
                    <div>
    					<span>2017-2018</span>
    					<h2>Wordpress Developer</h2>
    					<span>Cambridge University</span>
    					<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
    				</div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Experience