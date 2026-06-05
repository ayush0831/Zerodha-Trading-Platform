import React from 'react';

function Education() {
    return ( 
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <img src="media\Images\education.svg" style={{width: "70%"}} />
                </div>
                <div class="col-6">
                    <h1 class="mb-4 fs-3 fw-medium">Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="" style={{textDecoration:"none"}}> Varsity <i class="fa-solid fa-arrow-right-long"></i></a>
                    <p class="mt-4">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="" style={{textDecoration:"none"}}> TradingQ&A<i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;