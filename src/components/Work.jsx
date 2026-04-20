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
            RAG pipelines, agentic workflows, LLM integrations, and full-stack builds —
            here's a closer look at the projects that define the portfolio so far.
          </p>
        </div>
      </section>

      <section className="section" data-reveal>
        <div className="work-stack">
          <article className="panel work-card">
            <p className="card-kicker">01</p>
            <h2 className="card-title">RAG-Powered Intelligent QA</h2>
            <p className="card-copy">
              A retrieval-augmented generation pipeline that turns any webpage into a
              queryable knowledge base — from documentation pages to product FAQs —
              with a clean REST API interface on top.
            </p>
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

          <article className="panel work-card">
            <p className="card-kicker">02</p>
            <h2 className="card-title">Classroom Finder Portal</h2>
            <p className="card-copy">
              A full-stack web application that dynamically maps timetables to physical
              classrooms in real time — built for an institution that needed fewer scheduling
              collisions and better visibility.
            </p>
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

      <section className="section" data-reveal>
        <div className="section-head">
          <p className="section-label">Coverage</p>
          <h2 className="section-title">Technologies and domains I work across.</h2>
        </div>

        <div className="panel tag-panel">
          <div className="tag-list">
            <span className="tag">Prompt Engineering</span>
            <span className="tag">LangChain</span>
            <span className="tag">Structured Outputs</span>
            <span className="tag">Fine-Tuning</span>
            <span className="tag">LoRA</span>
            <span className="tag">Unsloth</span>
            <span className="tag">Retrieval-Augmented Generation</span>
            <span className="tag">Hybrid Search</span>
            <span className="tag">BM25</span>
            <span className="tag">Dense Retrieval</span>
            <span className="tag">Reranking</span>
            <span className="tag">Semantic Chunking</span>
            <span className="tag">Markdown-Aware Chunking</span>
            <span className="tag">HyDE</span>
            <span className="tag">Query Rewriting</span>
            <span className="tag">Qdrant</span>
            <span className="tag">FAISS</span>
            <span className="tag">Embeddings</span>
            <span className="tag">Vector Search</span>
            <span className="tag">MCP</span>
            <span className="tag">Agentic Pipelines</span>
            <span className="tag">React</span>
            <span className="tag">JavaScript</span>
            <span className="tag">Django</span>
            <span className="tag">REST APIs</span>
            <span className="tag">FastAPI</span>
          </div>
        </div>
      </section>

      <section className="section" data-reveal>
        <div className="panel contact-strip">
          <div>
            <p className="section-label">Seen enough to be curious?</p>
            <h2 className="section-title compact-title">Let's talk.</h2>
            <p className="section-copy compact-copy">
              I build RAG pipelines, agentic workflows, and LLM integrations that actually
              hold up in production. If you have a problem that needs an AI layer — let's talk.
            </p>
          </div>

          <div className="contact-actions">
            <Link className="button button-primary" to="/services">See What I Offer</Link>
            <a
              className="button button-secondary"
              href="/assets/Barath_B-Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Work;
