import React from "react";
import "../styles/Features.css";

function Features() {
  return (
    <div className="features">
      <div className="features-left-container">
        <div className="features-left-title">
          <h1>What’s different about Manage?</h1>
        </div>
        <div className="features-left-desc">
          <p>
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams
          </p>
        </div>
      </div>
      <div className="features-right-container">
        <div className="features-right-card">
          <div className="card-header-container">
            <strong>01</strong>
            <h1>Track company-wide progress</h1>
          </div>
          <div className="card-desc-container">
            <p>
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way done to the
              smallest of details. Never lose sight of the bigger picture again.
            </p>
          </div>
        </div>
        <div className="features-right-card">
          <div className="card-header-container">
            <strong>02</strong>
            <h1>Advanced built-in reports</h1>
          </div>
          <div className="card-desc-container">
            <p>
              Set internal delivery estimates and track progress toward company
              goals. Our customisable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
            </p>
          </div>
        </div>
        <div className="features-right-card">
          <div className="card-header-container">
            <strong>03</strong>
            <h1>Everything you need in one place</h1>
          </div>
          <div className="card-desc-container">
            <p>
              Stop jumping from one service to another to communicate, store
              files, track tasks and share documents. Manage offers an
              all-in-one team productivity solution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
