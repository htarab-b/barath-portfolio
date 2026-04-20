import React from 'react';
import { Link } from 'react-router-dom';

function Education() {
  return (
    <main id="main-content" className="page-shell">
      <section className="hero single-hero" data-reveal>
        <div className="panel hero-main full-span">
          <p className="eyebrow">Education</p>
          <h1 className="hero-title">The academic foundation behind the work.</h1>
          <p className="hero-summary">
            Two degrees in computer science — one focused on systems, the other on building
            with them. This page covers the academic background and the technical stack that
            shapes everything I build.
          </p>
        </div>
      </section>

      <section className="section" data-reveal>
        <div className="timeline">
          {/* ── Masters ── */}
          <article className="panel timeline-item" data-reveal>
            <div>
              <span className="timeline-period">2023 – 2025</span>
              <p className="timeline-company">SRM Institute of Science and Technology, Chennai</p>
            </div>
            <div>
              <h3 className="timeline-role">M.Sc Computer Science</h3>
              <ul className="bullet-list">
                <li>
                  Graduated with a 9.83 CGPA, which is what happens when you actually show up and take things seriously. Led the department's student association as President, shipped two officially approved prototype projects for the department, and picked up freelance work on the side because apparently college wasn't keeping me busy enough.
                </li>
              </ul>
            </div>
          </article>

          {/* ── Bachelors ── */}
          <article className="panel timeline-item" data-reveal>
            <div>
              <span className="timeline-period">2019 – 2022</span>
              <p className="timeline-company">SLCS, Madurai</p>
            </div>
            <div>
              <h3 className="timeline-role">B.Sc Computer Science</h3>
              <ul className="bullet-list">
                <li>
                  Started college with great enthusiasm for everything except academics. The first two years were character-building in ways that won't make it onto a resume. Somewhere near the end of second year, something clicked — picked up DSA, learned frameworks, built projects that seemed impressive at the time and are now quietly archived. Not pretty in hindsight, but that's where the foundation came from.
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="section" data-reveal>
        <div className="section-head">
          <p className="section-label">Frameworks And Tools</p>
          <h2 className="section-title">Technologies and platforms I work with.</h2>
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
            <p className="section-label">Want the full picture?</p>
            <h2 className="section-title compact-title">It's all here.</h2>
            <p className="section-copy compact-copy">
              The tags tell you what I work with. The resume tells you what I've done with it.
              And if you want to know who's actually behind all of this — that's what the
              About page is for.
            </p>
          </div>

          <div className="contact-actions">
            <a
              className="button button-primary"
              href="assets/Barath_B-Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </a>
            <Link className="button button-secondary" to="/about">Know Me Better</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Education;
