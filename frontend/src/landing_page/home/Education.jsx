import React from 'react';

function Education() {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img src="media\Images\education.svg" style={{width: "70%"}} />
                </div>
                <div className="col-6">
                    <h1 className="mb-4 fs-3 fw-medium">Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="" style={{textDecoration:"none"}}> Varsity <i className="fa-solid fa-arrow-right-long"></i></a>
                    <p className="mt-4">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="" style={{textDecoration:"none"}}> TradingQ&A<i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;