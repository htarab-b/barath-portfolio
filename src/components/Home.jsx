import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main id="main-content" className="page-shell">
      {/* ── Hero ── */}
      <section className="hero hero-home" data-reveal>
        <div className="panel hero-main interactive-panel hero-content">
          <p className="eyebrow">Overview</p>
          <p className="hero-intro">
            AI Engineer | RAG &amp; Retrieval | Agentic AI | LLM Engineering
          </p>
          <h1 className="hero-title">
            I tell computers to do things.{' '}
            <span className="title-highlight">Sometimes they listen</span>.
          </h1>
          <p className="hero-summary">
            I build the AI layer that makes software actually intelligent — retrieval systems
            that find the right thing, agents that do what you ask, and LLM integrations that
            stay on topic. Junior in title, sole AI engineer in practice.
          </p>

          <div className="hero-actions">
            <Link className="button button-primary" to="/work">View Work</Link>
            <a className="button button-secondary" href="assets/Barath_B-Resume.pdf" target="_blank" rel="noreferrer">
              Download Resume
            </a>
          </div>

          <div className="hero-badge-row">
            <span className="hero-badge">RAG &amp; Retrieval</span>
            <span className="hero-badge">Agentic AI</span>
            <span className="hero-badge">LLM Engineering</span>
            <span className="hero-badge">Full Stack</span>
          </div>
        </div>

        <aside className="panel hero-visual interactive-panel" data-tilt>
          <div className="portrait-shell">
            <img className="portrait-image" src="assets/professional-photo.jpg"
              alt="Portrait of Barath B" width="691" height="1024" />
            <div className="portrait-chip portrait-chip-top">AI Engineer</div>
            <div className="portrait-chip portrait-chip-bottom">RAG · Agents · LLMs</div>
          </div>

          <div className="hero-quick-grid">
            <article className="quick-card">
              <span className="quick-label">Current role</span>
              <span className="quick-value">AI Engineer</span>
              <span className="quick-copy">Caladrius.ai</span>
            </article>
            <article className="quick-card">
              <span className="quick-label">Primary focus</span>
              <span className="quick-value">Building the full AI layer</span>
              <span className="quick-copy">RAG, agents, and LLM APIs end-to-end</span>
            </article>
            <article className="quick-card">
              <span className="quick-label">What I solve</span>
              <span className="quick-value">Making LLMs actually useful</span>
              <span className="quick-copy">Right context, right tools, right output</span>
            </article>
          </div>
        </aside>
      </section>

      {/* ── At A Glance ── */}
      <section className="section" data-reveal>
        <div className="section-head">
          <p className="section-label">At A Glance</p>
          <h2 className="section-title">The short version of what I do.</h2>
        </div>

        <div className="summary-grid">
          <article className="panel stat-card">
            <span className="stat-value">Context Engineer</span>
            <span className="stat-label">
              I build RAG pipelines that actually retrieve the right thing — hybrid search,
              cross-encoder reranking, and semantic chunking that respects document structure.
            </span>
          </article>
          <article className="panel stat-card">
            <span className="stat-value">Agent Wrangler</span>
            <span className="stat-label">
              I design agentic workflows using MCP-based tooling where the model doesn't just
              think — it acts. Right tool, right order, right output.
            </span>
          </article>
          <article className="panel stat-card">
            <span className="stat-value">Production Whisperer</span>
            <span className="stat-label">
              Prompt engineering, structured outputs, and API integrations that don't collapse
              the moment someone asks something unexpected.
            </span>
          </article>
          <article className="panel stat-card">
            <span className="stat-value">Full Spectrum Builder</span>
            <span className="stat-label">
              I speak AI, backend, and frontend fluently. RAG pipeline to Django REST API to
              React frontend — without handing it off to anyone.
            </span>
          </article>
        </div>
      </section>

      {/* ── Explore By Page ── */}
      <section className="section" data-reveal>
        <div className="section-head">
          <p className="section-label">Explore By Page</p>
          <h2 className="section-title">Go deeper where you need to.</h2>
        </div>

        <div className="teaser-grid">
          <Link className="panel teaser-card" to="/work">
            <p className="card-kicker">Work</p>
            <h3 className="card-title">The projects where I told computers to do things and they actually listened</h3>
            <p className="card-copy">
              RAG systems, agentic pipelines, and a full-stack app or two to prove I existed
              before LLMs were cool.
            </p>
            <span className="card-link">Open Work</span>
          </Link>

          <Link className="panel teaser-card" to="/about">
            <p className="card-kicker">About</p>
            <h3 className="card-title">Who I am and why retrieval is the most underrated problem in AI</h3>
            <p className="card-copy">
              How I ended up as an AI engineer, and why I think retrieval is genuinely the most
              underrated problem in the entire AI stack.
            </p>
            <span className="card-link">Open About</span>
          </Link>

          <Link className="panel teaser-card" to="/experience">
            <p className="card-kicker">Experience</p>
            <h3 className="card-title">From full-stack to AI systems — a steep learning curve</h3>
            <p className="card-copy">
              The timeline of how a full-stack background turned into a career building AI
              systems. Short story, steep learning curve, no regrets.
            </p>
            <span className="card-link">Open Experience</span>
          </Link>

          <Link className="panel teaser-card" to="/services">
            <p className="card-kicker">Services</p>
            <h3 className="card-title">RAG pipelines, LLM integrations, and agentic workflows</h3>
            <p className="card-copy">
              What I can help you build. If it involves a vector DB and a model that needs to
              behave, I'm your person.
            </p>
            <span className="card-link">Open Services</span>
          </Link>

          <Link className="panel teaser-card" to="/education">
            <p className="card-kicker">Education</p>
            <h3 className="card-title">Degrees, frameworks, and self-inflicted learning sprints</h3>
            <p className="card-copy">
              The academic background, tech stack, and self-inflicted learning sprints that
              prove I did not just vibe my way into this.
            </p>
            <span className="card-link">Open Education</span>
          </Link>
        </div>
      </section>

      {/* ── Selected Highlights ── */}
      <section className="section" data-reveal>
        <div className="section-head">
          <p className="section-label">Selected Highlights</p>
          <h2 className="section-title">A few outcomes that define the portfolio.</h2>
        </div>

        <div className="detail-grid" style={{ gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }}>
          <article className="panel detail-card">
            <p className="card-kicker">01</p>
            <h3 className="card-title">RAG-Powered Intelligent QA</h3>
            <ul className="bullet-list">
              <li>Built a full RAG pipeline that scrapes any URL with BeautifulSoup, indexes content into FAISS, and routes user questions through Llama 3.</li>
              <li>Wrapped the whole thing in a Django REST API — submit a URL, ask a question, get an answer back.</li>
              <li>Turns any webpage into a queryable knowledge base: documentation, product pages, FAQs.</li>
            </ul>
            <div className="tag-list">
              <span className="tag">RAG</span>
              <span className="tag">FAISS</span>
              <span className="tag">Llama 3</span>
              <span className="tag">Django</span>
            </div>
          </article>

          <article className="panel detail-card">
            <p className="card-kicker">02</p>
            <h3 className="card-title">Classroom Finder Portal</h3>
            <ul className="bullet-list">
              <li>Full-stack web app that dynamically maps timetables to classrooms in real time with conflict detection.</li>
              <li>Approved as an official prototype by the department. Schedule conflicts dropped by 90% in testing.</li>
              <li>Laid the groundwork for a system that could scale across the institution.</li>
            </ul>
            <div className="tag-list">
              <span className="tag">Full Stack</span>
              <span className="tag">Real-time</span>
              <span className="tag">Production</span>
            </div>
          </article>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="section" data-reveal>
        <div className="contact-layout">
          <div className="panel contact-strip">
            <div>
              <p className="section-label">Contact</p>
              <h2 className="section-title compact-title">Let's connect.</h2>
              <p className="section-copy compact-copy">
                Available for AI engineering, RAG pipeline development, LLM integrations,
                and agentic workflow discussions.
              </p>
            </div>
            <div className="contact-actions">
              <a className="button button-primary" href="mailto:barathb.dev@gmail.com">Email</a>
              <a className="button button-secondary" href="https://www.linkedin.com/in/barathbalasundaram/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="button button-secondary" href="https://github.com/htarab-b" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>

          <form
            className={`panel enquiry-card${submitted ? ' is-success-state' : ''}`}
            id="enquiry-form"
            action="https://docs.google.com/forms/d/e/1FAIpQLSdvG-3uuAZlr_IZw_YT0SSOPylvC4-xMqLzD3kpPQ/formResponse"
            method="post"
            target="hidden_iframe"
            onSubmit={() => setSubmitted(true)}
          >
            <div className="form-header">
              <p className="section-label">Get In Touch</p>
              <h2 className="section-title compact-title">Drop me a message.</h2>
              <p className="section-copy compact-copy">
                Leave your details below and I'll get back to you.
              </p>
            </div>

            <div className="form-grid">
              <label className="field">
                <span className="field-label">Name</span>
                <input className="field-input" type="text" name="entry.1621349201" required readOnly={submitted} />
              </label>

              <label className="field">
                <span className="field-label">Email</span>
                <input className="field-input" type="email" name="entry.1661846347" required readOnly={submitted} />
              </label>

              <label className="field field-span">
                <span className="field-label">Message</span>
                <textarea className="field-input field-textarea" name="entry.592867916" rows="5"
                  placeholder="Tell me about your project or requirement." required readOnly={submitted}></textarea>
              </label>
            </div>

            <div className="form-footer">
              <p className="form-status" id="form-status"></p>
              {!submitted && (
                <button className="button button-primary" type="submit">Send Message</button>
              )}
            </div>

            <div className="success-overlay" id="success-overlay">
              <div className="success-animation">
                <svg className="success-tick" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                  <circle className="tick-circle" cx="26" cy="26" r="25" fill="none" />
                  <path className="tick-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                </svg>
              </div>
              <h3 className="success-title">Message sent successfully.</h3>
              <p className="success-copy">I'll get back to you shortly.</p>
            </div>
          </form>
        </div>

        <iframe
          name="hidden_iframe"
          id="hidden_iframe"
          style={{ display: 'none' }}
          title="Form submission target"
        ></iframe>
      </section>
    </main>
  );
}

export default Home;
