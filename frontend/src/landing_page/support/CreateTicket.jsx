import React from "react";

const supportTopics = [
  {
    title: "Account Opening",
    icon: "fa-solid fa-user-plus",
    description: "Start your account activation journey and track document status.",
    color: "#E8F5FF",
  },
  {
    title: "Zerodha Account",
    icon: "fa-solid fa-circle-user",
    description: "Manage KYC, profile changes, and account details easily.",
    color: "#F3E8FF",
  },
  {
    title: "Kite",
    icon: "fa-solid fa-chart-line",
    description: "Get help with the Kite trading app, login, and order placement.",
    color: "#E8F9EA",
  },
  {
    title: "Funds",
    icon: "fa-solid fa-indian-rupee-sign",
    description: "Resolve deposit, withdrawal, and ledger-related questions.",
    color: "#FFF4E5",
  },
  {
    title: "Console",
    icon: "fa-solid fa-desktop",
    description: "Support for Console reports, P&L, and margin statements.",
    color: "#E8F0FF",
  },
  {
    title: "Coin",
    icon: "fa-solid fa-coins",
    description: "Get help with mutual funds, SIPs, and Coin investment tracking.",
    color: "#F9EFE8",
  },
];

function CreateTicket() {
  return (
    <div className="container py-5">
      <div className="row gx-4 gy-4">
        <div className="col-12">
          <div className="p-4 rounded-4" style={{ backgroundColor: "#f7f9fc" }}>
            <h2 className="fw-bold">Support categories</h2>
            <p className="text-muted mb-0">
              Choose the topic that best matches your issue to create a ticket faster.
            </p>
          </div>
        </div>

        <div className="col-lg-8">
          <div className="row gx-3 gy-3">
            {supportTopics.map((topic) => (
              <div className="col-md-6" key={topic.title}>
                <div className="card h-100 shadow-sm border-0 rounded-4">
                  <div className="card-body d-flex flex-column">
                    <div
                      className="d-inline-flex align-items-center justify-content-center rounded-3 mb-3"
                      style={{ width: 52, height: 52, backgroundColor: topic.color }}>
                      <i className={`${topic.icon} fs-5 text-primary`}></i>
                    </div>
                    <h5 className="card-title fw-semibold">{topic.title}</h5>
                    <p className="card-text text-muted flex-grow-1">{topic.description}</p>
                    <button className="btn btn-outline-primary mt-3 align-self-start rounded-pill px-4">
                      Create ticket
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card rounded-4 shadow-sm border-0 mb-4">
            <div className="card-body">
              <h4 className="fw-semibold">Need help fast?</h4>
              <p className="text-muted">
                Select any category to launch the right support path. Our team aims to respond within 24 hours.
              </p>
              <div className="d-flex align-items-center gap-3 p-3 rounded-4" style={{ backgroundColor: "#f0f8ff" }}>
                <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center" style={{ width: 44, height: 44 }}>
                  <i className="fa-solid fa-headset"></i>
                </div>
                <div>
                  <h6 className="mb-1">Customer care</h6>
                  <p className="mb-0 text-muted">support@zerodhasupport.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card rounded-4 shadow-sm border-0">
            <div className="card-body">
              <h5 className="fw-semibold mb-3">Quick links</h5>
              <ul className="list-unstyled mb-0">
                <li className="mb-3">
                  <a href="#" className="text-decoration-none text-dark">
                    <span className="fw-medium">Track account opening</span>
                    <p className="text-muted mb-0">See your application status and next steps.</p>
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="text-decoration-none text-dark">
                    <span className="fw-medium">Kite user manual</span>
                    <p className="text-muted mb-0">Learn how to trade with Kite and manage orders.</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-dark">
                    <span className="fw-medium">Learn how to create a ticket</span>
                    <p className="text-muted mb-0">Step-by-step guidance for faster support.</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
