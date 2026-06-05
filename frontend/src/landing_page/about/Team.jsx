import React from "react";

function Team() {
  return (
    <div class="container">
      <div class="row">
        <h1 class="fs-3 text-center">People</h1>
      </div>
      <div class="row p-5 mt-4" style={{ lineHeight: "1.8", fontSize: "1.1em" }}>
        <div class="col-6 text-center text-muted">
          <img
            src="media\Images\nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h5 class="mt-3">Nithin Kamath</h5>
          <h6 class="fw-normal">Founder,CEO</h6>
        </div>
        <div class="col-6">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
           <p>Playing basketball is his zen.</p>
          <p>
            Connect on {" "}
            <a href="" style={{ textDecoration: "none" }}>
              Homepage
            </a>
            {" "} / {" "}
            <a href="" style={{ textDecoration: "none" }}>
                TradingQnA
            </a>
            {" "} / {" "}
            <a href="" style={{ textDecoration: "none" }}>
                Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
