import React from 'react';

function Footer( props ) {
    return(
        <div className="Footer footer-bottom border-top border-white">
            <div className="container">
                <div className="row">             
                    <div className="col p-3">
                        <a className="btn btn-social-icon btn-facebook mr-2 rounded" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin mr-2 rounded" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter mr-2 rounded" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-instagram mr-2 rounded" href="http://instagram.com/"><i className="fa fa-instagram"></i></a>
                    </div>
                    <div className="col p-3">
                        <p>&copy; Copyright 2020 Triceria</p>
                    </div>
                </div>
            </div>
        </div>   
    )
}

export default Footer;