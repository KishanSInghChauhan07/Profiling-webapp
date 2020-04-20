import React,{Component} from 'react'
import '../Styles/Experience.css'

class Experience extends Component{

    render(){
        return (
            <React.Fragment>
                <div className="container mt-5 pl-5">
                <h2 className="text-center text-warning">Experience</h2>
                <div className="row education mb-3">
                    <div className="col-12 mt-5">
                    <div>
                        <h3>UI/UX Designer</h3>
                        <div className="d-flex">
                            <h5 className="text-success ml-2">Cambridge University</h5>
    					    <span className="ml-5">2017-2018</span>
                        </div>
                        <p className="mt-2">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
    				</div>
                    </div>
                    <div className="col-12 mt-5">
                    <div>
                        <h3>UI/UX Designer</h3>
                        <div className="d-flex">
                            <h5 className="text-success ml-2">Cambridge University</h5>
    					    <span className="ml-5">2017-2018</span>
                        </div>
                        <p className="mt-2">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
    				</div>
                    </div>
                </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Experience