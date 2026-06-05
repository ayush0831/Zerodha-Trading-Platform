import React from "react";

function Hero() {
  return (
    <header style={{ backgroundColor: "rgb(245 245 245)" }}>
      <div class="container p-5">
        <div class="row">
          <div class="col-4">
            <h1 class="fw-medium">Support Portal</h1>
          </div>
          <div class="col-6"></div>
          <div class="col-2 ">
            <button class="btn btn-primary btn-lg">My tickets</button>
          </div>
        </div>
        <div class="row mt-4 text-muted">
            <input type="search" placeholder="Eg: How do I open account, How do I activate F&O..." class="p-3"></input>
        </div>
      </div>
    </header>
  );
}

export default Hero;
