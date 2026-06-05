import React from "react";

function Stats() {
  return (
    <div class="container p-3">
      <div class="row p-5">
        <div class="col-6 p-5">
          <h1 class="mb-5 fs-3 fw-medium">Trust with confidence</h1>
          <h2 class="fs-4 fw-normal">Customer-first always</h2>
          <p class="text-muted">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>
          <h2 class="fs-4 fw-normal">No spam or gimmicks</h2>
          <p class="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like. Our
            philosophies.
          </p>
          <h2 class="fs-4 fw-normal">The Zerodha universe</h2>
          <p class="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h2 class="fs-4 fw-normal">Do better with money</h2>
          <p class="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div class="col-6">
          <img src="media/Images/ecosystem.png" style={{ width: "100%" }} />
          <a href="" class="mx-5" style={{ textDecoration: "none" }}>
            Explore our products <i class="fa-solid fa-arrow-right-long"></i>
          </a>
          <a href="" style={{ textDecoration: "none" }}>
            Try Kite demo <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
        <img
          src="media\Images\pressLogos.png"
          alt="PressLogo"
          class="mx-auto mt-4 p-2"
          style={{ width: "60%" }}
        />
      </div>
    </div>
  );
}

export default Stats;
