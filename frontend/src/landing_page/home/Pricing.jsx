import React from 'react';

function Pricing() {
    return ( 
        <div className="container p-5">
            <div className="row p-5">
                <div className="col-6">
                    <h1 className="mb-4 fs-3 fw-medium">Unbeatable pricing</h1>
                    <p className="fs-5">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="" style={{textDecoration:"none"}}> See Pricing<i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-4">
                            <img src="media/Images/pricing0.svg" style={{width: "70%"}} />
                            <p className="text-muted ">Free account opening</p>
                        </div>
                        <div className="col-4">
                            <img src="media/Images/pricingEquity.svg" style={{width: "70%"}} />
                            <p className="text-muted">Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className="col-4">
                            <img src="media/Images/intradayTrades.svg" style={{width: "70%"}} />
                            <p className="text-muted">Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;