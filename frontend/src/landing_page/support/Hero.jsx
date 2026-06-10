import React from "react";

function Hero() {
  return (
    <header style={{ backgroundColor: "rgb(245 245 245)" }}>
      <div className="container p-5">
        <div className="row align-items-center">
          <div className="col-4">
            <h1 className="fw-medium">Support Portal</h1>
          </div>
          <div className="col-6"></div>
          <div className="col-2">
            <button className="btn btn-primary btn-lg">My tickets</button>
          </div>
        </div>
        <div className="row mt-4 text-muted">
          <div className="col-12">
            <input
              type="search"
              placeholder="Eg: How do I open account, How do I activate F&O..."
              className="p-3 w-100 rounded-3 border"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
