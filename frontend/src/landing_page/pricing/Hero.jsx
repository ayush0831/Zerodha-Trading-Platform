import React from "react";

function Hero() {
  return (
    <div class="container">
      <div class="row p-5 mt-5 text-center">
        <h2>Charges</h2>
        <p class="tex<t-muted fs-4">List of all charges and taxes</p>
      </div>
      <div class="row p-5" style={{ marginLeft: "2rem" }}>
        <div class="col-4 text-center">
          <img src="media\Images\pricing0.svg" style={{ width: "65%" }} />
          <h2 class="mb-4">Free equity delivery</h2>
          <p class="text-muted">
            All equity delivery investments (NSE, BSE),
            <br /> are absolutely free — ₹ 0 brokerage.
          </p>
        </div>
        <div class="col-4 text-center">
          <img src="media\Images\intradayTrades.svg" style={{ width: "65%" }} />
          <h2 class="mb-4">Intraday and F&O trades</h2>
          <p class="text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per <br/>executed order on
            intraday trades across <br/>equity, currency, and commodity trades. Flat<br/>
            ₹20 on all option trades.
          </p>
        </div>
        <div class="col-4 text-center">
          <img src="media\Images\pricing0.svg" style={{ width: "65%" }} />
          <h2 class="mb-4">Free direct MF</h2>
          <p class="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
