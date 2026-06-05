import React from 'react';

function Awards() {
    return ( 
        <div class="container">
            <div class="row">
                <div class="col-6 p-5">
                    <img src="media/Images/largestBroker.svg" alt="Broker_Image"/>
                </div>
                <div class="col-6 p-5 mt-3">
                    <h1>Largest stock broker in India</h1>
                    <p class="mb-5">2+ million Zerodha clients contribute to over 15% to all retail order volumes in India daily by trading and investing in: </p>
                    <div class="row">
                        <div class="col-6">
                            <ul>
                                <li>
                                    <p>Futures and Options</p>
                                </li>
                                <li>
                                    <p>Commodity derivatives</p>
                                </li>
                                <li>
                                    <p>Currency derivates</p>
                                </li>
                            </ul>
                        </div>
                        <div class="col-6">
                            <ul>
                                <li>
                                    <p>Stocks & IPOs</p>
                                </li>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                                <li>
                                    <p>Bonds & Govt. Securities</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Awards;