import React from "react";

function Universe() {
  return (
    <div class="container">
      <div class="row text-center p-5 mt-5">
        <h1 class="fs-4 fw-medium mb-4">The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div class="row ">
        <div class="col-4 text-center">
          <a href="">
            <img
              src="media\Images\zerodhaFundhouse.png"
              style={{ width: "50%" }}
            />
          </a>
          <p class="text-muted mt-3 text-light" style={{ fontSize: "13px" }}>
            Our asset management venture <br /> that is creating simple and
            transparent index <br /> funds to help you save for your goals.
          </p>
        </div>
        <div class="col-4 text-center">
          <a href="">
            <img
              src="media/Images/sensibullLogo.svg"
              style={{ width: "50%" }}
            />
          </a>
          <p class="text-muted mt-3 text-light" style={{ fontSize: "13px" }}>
            Our asset management venture <br /> that is creating simple and
            transparent index <br /> funds to help you save for your goals.
          </p>
        </div>
        <div class="col-4 text-center">
          <a href="">
            <img src="media\Images\tijori.svg" style={{ width: "50%" }} />
          </a>
          <p class="text-muted mt-3 text-light" style={{ fontSize: "13px" }}>
            Our asset management venture <br /> that is creating simple and
            transparent index <br /> funds to help you save for your goals.
          </p>
        </div>
      </div>
      <div class="row ">
        <div class="col-4 text-center">
          <a href="">
            <img src="media\Images\streakLogo.png" style={{ width: "50%" }} />
          </a>
          <p class="text-muted mt-3 text-light" style={{ fontSize: "13px" }}>
            Systematic trading platform <br />
            that allows you to create and backtest <br />
            strategies without coding.
          </p>
        </div>
        <div class="col-4 text-center">
          <a href="">
            <img
              src="media/Images/smallcaseLogo.png"
              style={{ width: "50%" }}
            />
          </a>
          <p class="text-muted mt-3 text-light" style={{ fontSize: "13px" }}>
            Thematic investing platform <br /> that helps you invest in
            diversified
            <br />
            baskets of stocks on ETFs.
          </p>
        </div>
        <div class="col-4 text-center">
          <a href="">
            <img src="media\Images\dittoLogo.png" style={{ width: "50%" }} />
          </a>
          <p class="text-muted mt-3 text-light" style={{ fontSize: "13px" }}>
            Personalized advice on life <br /> and health insurance. No spam{" "}
            <br /> and no mis-selling.
          </p>
        </div>
      </div>
      <div class="text-center p-5 mb-5">
        <button class="btn btn-primary" style={{width: "20%",margin: "0 auto"}}>Explore now</button>
      </div>
      
    </div>
  );
}

export default Universe;
