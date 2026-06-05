import React from 'react';

function Pricing() {
    return ( 
        <div class="container p-5">
            <div class="row p-5">
                <div class="col-6">
                    <h1 class="mb-4 fs-3 fw-medium">Unbeatable pricing</h1>
                    <p class="fs-5">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="" style={{textDecoration:"none"}}> See Pricing<i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div class="col-6">
                    <div class="row">
                        <div class="col-4">
                            <img src="media/Images/pricing0.svg" style={{width: "70%"}} />
                            <p class="text-muted ">Free account opening</p>
                        </div>
                        <div class="col-4">
                            <img src="media/Images/pricingEquity.svg" style={{width: "70%"}} />
                            <p class="text-muted">Free equity delivery and direct mutual funds</p>
                        </div>
                        <div class="col-4">
                            <img src="media/Images/intradayTrades.svg" style={{width: "70%"}} />
                            <p class="text-muted">Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;