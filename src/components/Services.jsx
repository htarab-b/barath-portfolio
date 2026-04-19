import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <main id="main-content" className="page-shell">
      <section className="hero single-hero" data-reveal>
        <div className="panel hero-main full-span">
          <p className="eyebrow">Services</p>
          <h1 className="hero-title">What I can help you build.</h1>
          <p className="hero-summary">
            Content coming soon. This page will detail RAG pipelines, LLM integrations,
            and agentic workflow services.
          </p>
        </div>
      </section>

      <section className="section" data-reveal>
        <div className="panel contact-strip">
          <div>
            <p className="section-label">Navigate</p>
            <h2 className="section-title compact-title">Back to home.</h2>
          </div>
          <div className="contact-actions">
            <Link className="button button-primary" to="/">Home</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
