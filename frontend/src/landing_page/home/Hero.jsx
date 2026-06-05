import React from 'react';

function Hero() {
    return ( 
        <div class="container p-5 mb-5">
            <div class="row text-center">
                <img src="media/Images/homeHero.png" alt="Hero Image" class="mb-5" />
                <h1 class="mt-5">Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button class="btn btn-primary fs-5" style={{width: "20%",margin: "0 auto"}}>Signup for free</button>
            </div>
        </div>
    );
}

export default Hero;