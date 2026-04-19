import React from 'react';
import { Link } from 'react-router-dom';

function Work() {
  return (
    <main id="main-content" className="page-shell">
      <section className="hero single-hero" data-reveal>
        <div className="panel hero-main full-span">
          <p className="eyebrow">Work</p>
          <h1 className="hero-title">Detailed view of the work behind the summary.</h1>
          <p className="hero-summary">
            Content coming soon. This page will showcase RAG systems, agentic pipelines,
            and full-stack projects in detail.
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

export default Work;
